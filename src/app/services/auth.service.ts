import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * autor: Daniel Males
 * since: 25-11-2025
 * version: 1.0
 * Servicio para iniciar sesion
 */
export class AuthService {

  constructor(private http: HttpClient) { }

  authUser(user: string, pass: string) {
    return this.http.post(`${environment.apiUrl}/autenticacion/login`, {
      user: user,
      password: pass
    })
  }
}