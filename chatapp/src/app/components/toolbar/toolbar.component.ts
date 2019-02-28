import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  user: any;
  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {
    this.user = this.tokenService.GetPayloadOfToken();
    const dropdownEl = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropdownEl, {
      alignment: 'right',
      hover: true,
      coverTrigger: false,
      constrainWidth: true
    });
  }

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['']);
  }

  GoToHome() {
    this.router.navigate(['streams']);
  }
}
