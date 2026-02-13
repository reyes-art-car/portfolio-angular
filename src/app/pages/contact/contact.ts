import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TranslateService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
type ContactReason = 'Trabajo' | 'Colaboración' | 'Consulta' | 'Otro';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html'
})
export class Contact {
  t = inject(TranslateService);
  status: 'idle' | 'sending' | 'sent' = 'idle';
  form!: FormGroup;

  reasons: ContactReason[] = ['Trabajo', 'Colaboración', 'Consulta', 'Otro'];

  linkedinUrl = 'www.linkedin.com/in/maria-reyes-a-carrero';
  githubUrl = 'https://github.com/reyes-art-car';
  email = 'mariareyesartcar@gmail.com';
  location = 'Sevilla, España';

  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      reason: ['Trabajo', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(800)]],
      accept: [false, [Validators.requiredTrue]],
    });
  }

  submit(): void {
    this.status = 'idle';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'sending';

    setTimeout(() => {
      console.log('Mensaje enviado (simulado):', this.form.value);
      this.status = 'sent';
      this.form.reset({ reason: 'Trabajo', accept: false });
    }, 800);
  }

  isInvalid(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  getError(controlName: string): string {
    const c = this.form.get(controlName);
    if (!c || !c.errors) return '';

    if (c.errors['required']) return this.t.t('error_required');
    if (c.errors['requiredTrue']) return this.t.t('error_required_true');
    if (c.errors['email']) return this.t.t('error_email');
    if (c.errors['minlength']) return `Mínimo ${c.errors['minlength'].requiredLength} caracteres.`;
    if (c.errors['maxlength']) return `Máximo ${c.errors['maxlength'].requiredLength} caracteres.`;

    return this.t.t('error_invalid');
  }
}
