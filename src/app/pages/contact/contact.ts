import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

type ContactReason = 'Trabajo' | 'Colaboración' | 'Consulta' | 'Otro';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html'
})
export class Contact {
  status: 'idle' | 'sending' | 'sent' = 'idle';
  form!: FormGroup;

  reasons: ContactReason[] = ['Trabajo', 'Colaboración', 'Consulta', 'Otro'];

  linkedinUrl = 'www.linkedin.com/in/maria-reyes-a-carrero';
githubUrl = 'https://github.com/reyes-art-car';
email = 'mariareyesartcar@gmail.com';
location = 'Sevilla, España';


  constructor(private fb: FormBuilder) {
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

    // Envío simulado (queda profesional)
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

    if (c.errors['required']) return 'Este campo es obligatorio.';
    if (c.errors['requiredTrue']) return 'Debes aceptar esta condición.';
    if (c.errors['email']) return 'Introduce un email válido.';
    if (c.errors['minlength']) return `Mínimo ${c.errors['minlength'].requiredLength} caracteres.`;
    if (c.errors['maxlength']) return `Máximo ${c.errors['maxlength'].requiredLength} caracteres.`;

    return 'Valor no válido.';
  }
}
