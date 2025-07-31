import { inject, Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from "@angular/forms";

@Injectable({
    providedIn:'root'
})

export class RegisterFormService{
    private formBuilder = inject(FormBuilder)
}