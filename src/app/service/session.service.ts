import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) {
  }

  // TODO remove demo
  public test(): void {

    this.httpClient.get('/api/rest/universal/principal').subscribe((p) => {
      console.log(p);
    }, (x) => {
      console.log(x);

      const credentials = {
        username: 'a',
        password: 'a'
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const body = new URLSearchParams();
      body.set('username', credentials.username);
      body.set('password', credentials.password);

      this.httpClient.post(
          '/api/login',
          body.toString(),
          { headers: headers, withCredentials: true }
        )
        .subscribe((r) => {
          console.log(r);
        });
    });
  }
}
