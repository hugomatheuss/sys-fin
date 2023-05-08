import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavbarOptions } from 'src/app/static/navbar-options';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  options: any[] = NavbarOptions;
  isLogged: boolean;

  constructor(private loginService: LoginService) {
    this.isLogged = this.loginService.isLogged;
  }

  ngOnInit(): void {
  }

  sair() {
    StorageUtil.removeAll();
    location.reload();
  }
}
