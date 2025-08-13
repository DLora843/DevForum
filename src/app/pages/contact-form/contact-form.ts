import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm implements OnInit {
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }

  get nameErrorMessage(): string {
    const nameControl = this.contactForm.get('name');
    if (nameControl?.hasError('required')) return 'Name is required';
    if (nameControl?.hasError('minlenght')) return 'Name must be at least 3 characters';
    return '';
  }

  get emailErrorMessage(): string {
    const emailControl = this.contactForm.get('email');
    if (emailControl?.hasError('required')) return 'Email is required';
    if (emailControl?.hasError('minlenght')) return 'Invalid email format';
    return '';
  }

  get messageErrorMessage(): string {
    const messageControl = this.contactForm.get('message');
    if (messageControl?.hasError('required')) return 'Message is required';
    if (messageControl?.hasError('minlenght')) return 'Message cannot exceed 500 characters';
    return '';
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact Form Data:', this.contactForm.value);
      alert('Your message has been sent successfully!');
      this.contactForm.reset();
    }
  }
}
