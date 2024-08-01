import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { iBudget } from '../../shared/entities';
import { BudgetService } from '../../shared/services/budget.service';

@Component({
  selector: 'app-form-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-payment.component.html',
  styleUrl: './form-payment.component.css',
})
export class FormPaymentComponent {
  budgetService = inject(BudgetService);
  public form: FormGroup = new FormGroup({
    amount: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    }),
    date: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(40),
      ],
    }),
    category: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ],
    }),
    place: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ],
    }),
    type: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ],
    }),
  });

  onSubmit() {
    const formData = this.form.value;
    const newBudget: iBudget = {
      amount: formData.amount,
      date: new Date(formData.date), // Assuming date is a string in the form
      category: formData.category,
      place: formData.place,
      type: formData.type,
    };
    const alert = document.getElementById('alert') as HTMLDivElement;
    alert.classList.remove('d-none');

    // Optionally, set a timeout to reload the page
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Reload after 3 seconds
    // Add the newBudget to the mock data and save to localStorage
    this.budgetService.saveFormData(newBudget);
  }
}
