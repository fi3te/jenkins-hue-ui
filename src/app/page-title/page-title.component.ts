import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  public title$ = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    const getPageTitle = () => {
      let child = this.route ? this.route.firstChild : null;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        } else {
          return '';
        }
      }
      return '';
    };

    this.title$.next(getPageTitle());

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(getPageTitle)
    ).subscribe(title => {
      this.title$.next(title);
    });
  }
}
