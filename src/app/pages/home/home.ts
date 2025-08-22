import { Component, inject} from '@angular/core';
import { AuthService } from '../../core/services';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../shared/highlight';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, Highlight],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 private authService = inject(AuthService);
 readonly isLoggedIn = this.authService.isLoggedIn;
 readonly currentUser = this.authService.currentUser;
}