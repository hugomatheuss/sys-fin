import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: UntypedFormGroup;

  constructor(private service: LoginService, private route: Router, private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  salvar() {
    this.service.cadastrar(this.form.value).subscribe((res) => {
      console.log(res);
      if (res.authorization) {
        StorageUtil.store('isLogged', true);
        StorageUtil.store('token', res.authorization.access_token);
        StorageUtil.store('token_type', res.authorization.token_type);
        location.href = '/home';
      }
    })
  }
}
