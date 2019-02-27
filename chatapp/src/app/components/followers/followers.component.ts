import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers = [];
  user: any;

  constructor(private tokenService: TokenService, private userService: UsersService) {}

  ngOnInit() {
    this.user = this.tokenService.GetPayloadOfToken();
    this.GetUser();
  }

  GetUser() {
    this.userService.GetUserById(this.user._id).subscribe(
      data => {
        // console.log(data);
        this.followers = data.result.followers;
      },
      err => {
        console.log(err);
      }
    );
  }
}
