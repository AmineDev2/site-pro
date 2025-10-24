// contact.component.ts (ajouts clés)
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  loading = false;
  error = false;

  // 👇 nouveau: état d’affichage + progression + timer
  mode: 'form' | 'success' = 'form';
  progress = 0; // 0 → 100
  private timer?: any; // setInterval ref

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: [''], // honeypot
  });

  constructor(
    private fb: FormBuilder,
    private contact: ContactService,
    private router: Router
  ) {}

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  submit(): void {
    this.error = false;
    if (this.form.invalid || this.form.value.website) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;

    const payload = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      phone: this.form.value.phone?.trim() || '-',
      budget: this.form.value.budget?.trim() || '-',
      message: this.form.value.message!,
    };

    this.contact
      .send(payload)
      .then(() => {
        this.loading = false;
        this.form.reset();

        // ✅ passe en mode succès + lance barre 5s puis redirection
        this.mode = 'success';
        this.startProgressAndRedirect(5000, '/'); // 5s -> home
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      });
  }

  private startProgressAndRedirect(durationMs: number, to: string) {
    const stepMs = 100;
    const steps = durationMs / stepMs; // 50 pas
    let i = 0;
    this.progress = 0;

    this.timer = setInterval(() => {
      i++;
      this.progress = Math.min(100, Math.round((i / steps) * 100));
      if (i >= steps) {
        clearInterval(this.timer);
        this.router.navigateByUrl(to);
      }
    }, stepMs);
  }
}
