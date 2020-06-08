import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + 'auth/';
  private jwtHelpter = new JwtHelperService();
  public decodedToken: any;

  constructor(
    private http: HttpClient
  ) { }

  public login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelpter.decodeToken(user.token);
        }
      })
    );
  }

  public register(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', model);
  }

  public loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelpter.isTokenExpired(token);
  }
}
