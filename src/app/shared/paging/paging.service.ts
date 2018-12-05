import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, first, timeout, map } from 'rxjs/operators';

import { REST_USERS } from '../../service/http/common/constants';

// TODO remove service and use paging of library

@Injectable()
export class PagingService<Type> {
  private url: string = REST_USERS;
  private searchItem$: Subject<string>;
  private dtosReloaded$ = new Subject<void>();

  public count = 0;
  public page = 0;
  public lastPage = 0;
  public pageSize = 10;
  public searchItem = '';
  public dtos: Type[] = [];
  public searching = false;

  constructor(private httpClient: HttpClient) {}

  public static getInstance<E>(httpClient: HttpClient, url: string): Observable<PagingService<E>> {
    const instance = new PagingService<E>(httpClient);
    instance.setUrl(url);
    return instance.dtosReloaded$.pipe(first(), timeout(5000), map(x => instance));
  }

  public setUrl(url: string): void {
    this.dtos = [];
    this.url = url;
    this.refresh();
  }

  public refresh(): void {
    this.page = 0;
    this.updateCount();
    this.reloadDTOs();
  }

  public updateCount(): void {
    this.countDTOs().subscribe(next => {
      this.count = next;
      this.computeLastPage();
    });
  }

  public computeLastPage(): void {
    this.lastPage = Math.floor(this.count / this.pageSize);
    if (this.count % this.pageSize === 0 && this.count > 0) {
      this.lastPage -= 1;
    }
  }

  public pageSizeHasChanged(): void {
    this.computeLastPage();
    this.page = 0;
    this.reloadDTOs();
  }

  public backPossible(): boolean {
    return this.page > 0;
  }

  public back(): void {
    if (this.backPossible()) {
      this.page -= 1;
      this.reloadDTOs();
    }
  }

  public forwardPossible(): boolean {
    return this.page < this.lastPage;
  }

  public forward(): void {
    if (this.forwardPossible()) {
      this.page += 1;
      this.reloadDTOs();
    }
  }

  public computeSearch(): void {
    if (!this.searchItem$) {
      this.searchItem$ = new Subject<string>();
      this.searchItem$.pipe(debounceTime(400)).subscribe(() => {
        this.refresh();
      });
    }
    this.searching = true;
    this.searchItem$.next(this.searchItem);
  }

  public reloadDTOs(): void {
    this.findDTOs().subscribe(
      next => {
        this.dtos = next;
        this.dtosReloaded$.next();
        this.searching = false;
      },
      () => {
        this.searching = false;
      }
    );
  }

  private findDTOs(): Observable<Type[]> {
    const options = this.searchItem
      ? { params: new HttpParams().set('searchItem', `${this.searchItem}`) }
      : undefined;
    return this.httpClient.get<Type[]>(
      `${this.url}/${this.page}/${this.pageSize}`,
      options
    );
  }

  private countDTOs(): Observable<number> {
    const options = this.searchItem
      ? { params: new HttpParams().set('searchItem', `${this.searchItem}`) }
      : undefined;
    return this.httpClient.get<number>(`${this.url}/count`, options);
  }
}
