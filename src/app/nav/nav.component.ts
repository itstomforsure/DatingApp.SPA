import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public model: any = {};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in succesfully!');
    }, error => {
      console.log(error);
    });
  }

  public loggedIn() {
    const token = localStorage.getItem('token');

    return !!token;
  }

  public logout() {
    localStorage.removeItem('token');
    console.log('Logged out!');
  }

}
