import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  signupUser() {
    this.authService.registerUser('test_placeholer').subscribe(
      data => {
        console.log(data);
      },
      err => console.log
    );
  }
}
