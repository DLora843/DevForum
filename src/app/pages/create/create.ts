import { Component, inject} from '@angular/core';
import { AuthService, ThemesService} from '../../core/services';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  private authService = inject(AuthService);
  private themesService = inject(ThemesService);
  private router = inject(Router);

  themeName = '';
  postText = '';
  titleError = false;
  contentError = false;
  titleErrorMessage = '';
  contentErrorMessage = '';

  validateTitle(): void{
    if (!this.themeName){
      this.titleError = true;
      this.titleErrorMessage = 'Theme name is required';
    } else if (this.themeName.length < 5){
      this.titleError =true;
      this.titleErrorMessage = 'Theme name must be at least 5 characters long.';
    } else {
      this.titleError = false;
      this.titleErrorMessage = '';
    }
  }

  validateContent(): void{
    if (!this.postText){
      this.contentError = true;
      this.contentErrorMessage = 'The field with your post is required.';
    } else if (this.postText.length < 10){
      this.contentError = true;
      this.contentErrorMessage = 'Post must be at least 10 characters long.';
    } else {
      this.contentError = false;
      this.contentErrorMessage = '';
    }
  }

  isFormValid(): boolean {
    return Boolean(this.themeName) && Boolean(this.postText) && !this.titleError && !this.contentError
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }

  OnSubmit(): void {
    this.validateTitle();
    this.validateContent();

    if (this.isFormValid()){
      const newTheme = {
      themeName: this.themeName,
      postText: this.postText,
      userId: this.authService.getCurrentUserId()
      };


      // For now, we'll simulate a successful creation and redirect
      // In a real app, this would be a POST request to the API
      console.log('Created theme:', newTheme);

      // Simulate API call delay
      setTimeout(() => {
        this.router.navigate(['/details']);
      },500);
    }
  }

}
