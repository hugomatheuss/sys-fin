import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageUtil } from '../utils/storage.util';
import { RegisterAuthorizationInterface, RegisterResponseInterface } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_url = 'http://localhost:8000/api/auth';

  constructor(public http: HttpClient) { }

  public get isLogged(): boolean {
    return StorageUtil.get('isLogged');
  }
  
  login(dados: { email: string; senha: string}): Observable<RegisterAuthorizationInterface> {
      return this.http.post<RegisterAuthorizationInterface>(`${this.base_url}/login`, dados);
  }

  cadastrar(dados: { nome: string; email: string; senha: string }): Observable<RegisterResponseInterface> {
      return this.http.post<RegisterResponseInterface>(`${this.base_url}/register`, dados);
  }
}
