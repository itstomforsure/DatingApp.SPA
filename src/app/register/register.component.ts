import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  public model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
  }

  public register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful!');
    }, error => {
      this.alertify.error(error);
    });
  }

  public cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Cancelled!');
  }

}
