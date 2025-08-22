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
public authService = inject(AuthService);
private router = inject(Router);

get loggedIn() : boolean {
  return this.authService.isLoggedIn();
}

get currentUserName(): string | null {
  return this.authService.currentUser()?.username || '';
}

logout(): void {
  this.authService.logout().subscribe(() => {
  this.router.navigate(['/home']); 
  });
}
}
