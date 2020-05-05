import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public values: any;

  public registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  public registerToggle() {
    this.registerMode = !this.registerMode;
  }

  public cancelRegsiterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
