import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  loading = false;
  success = false;
  error = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: [''], // honeypot anti-bot (doit rester vide)
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    this.success = this.error = false;
    if (this.form.invalid || this.form.value.website) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;

    // 👉 à remplacer par votre service d’envoi (API, email, Formspree, etc.)
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      console.log('Contact payload', this.form.value);
      this.form.reset();
    }, 900);
  }
}
