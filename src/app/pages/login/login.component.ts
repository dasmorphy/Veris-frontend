import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  showModal: boolean = false;
  messageModal: any = { title: 'Aviso', message: 'Complete todos los campos' };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.messageModal = { title: 'Aviso', message: 'Complete todos los campos' }
      this.showModal = true;
      return;
    }

    const user = this.loginForm.get('usuario')?.value;
    const pass = this.loginForm.get('password')?.value;

    this.authService.authUser(user, pass).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.data.token)
        this.router.navigate(['/inicio']);
      },
      error: (error: any) => {
        console.log(error)
        this.messageModal = { title: 'Aviso', message: 'Credenciales incorrectas' }
        this.showModal = true;
      }
    });
  }

}
