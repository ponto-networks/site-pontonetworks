import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/**
 * Componente Contact
 * Formulário de contato com validação usando Reactive Forms
 */
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  // Formulário de contato
  contactForm!: FormGroup;
  
  // Estado de envio
  isSubmitting = false;
  submitSuccess = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Inicializa o formulário com validações
   */
  private initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Processa o envio do formulário
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simula envio do formulário (em produção, aqui seria uma chamada HTTP)
      console.log('Dados do formulário:', this.contactForm.value);
      
      // Simula delay de envio
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        // Reseta o formulário após 3 segundos
        setTimeout(() => {
          this.contactForm.reset();
          this.submitSuccess = false;
        }, 3000);
      }, 1500);
    } else {
      // Marca todos os campos como touched para exibir erros
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
