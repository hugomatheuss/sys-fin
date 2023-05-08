import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: UntypedFormGroup;

  constructor(private service: LoginService, private route: Router, private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  entrar() {
    this.service.login(this.form.value).subscribe((res) => {
      if (res.access_token) {
        StorageUtil.store('isLogged', true);
        StorageUtil.store('token', res.access_token);
        StorageUtil.store('token_type', res.token_type);
        location.href = '/home';
      }
    });
  }

}
