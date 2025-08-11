import { Component, inject} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
private authService = inject(AuthService);
private router = inject(Router);

get isLoggedIn() : boolean {
  return this.authService.isLoggedIn();
}

logout(): void {
  this.authService.logout();
  this.router.navigate(['/home']);
}
}
