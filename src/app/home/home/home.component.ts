import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const correctUsername = 'Lana';
      const correctPassword = 'admin';

      if (
        this.loginForm.value.username === correctUsername &&
        this.loginForm.value.password === correctPassword
      ) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Mauvais login');
      }
    }
  }
}
