import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLogged = localStorage.getItem('token');

    if (!isLogged) {
      return true;
    }

    this.router.navigate(['/inicio']);
    return false;
  }
}
