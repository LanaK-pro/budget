import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { iBudget } from '../../shared/entities';
import { BudgetService } from '../../shared/services/budget.service';
import { FormPaymentComponent } from '../form-payment/form-payment.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-budget-detail',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective,
    FormPaymentComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './budget-detail.component.html',
  styleUrl: './budget-detail.component.css',
})
export class BudgetDetailComponent implements OnInit {
  //Fait un new form data pour ajouter un paiment
  budgets: iBudget[] = [];
  income: number = 0;
  spent: number = 0;
  categorySpent1: number = 0;
  categorySpent2: number = 0;
  categorySpent3: number = 0;
  categorySpent4: number = 0;
  service = inject(BudgetService);

  mockBudgetData: iBudget[] = [];

  ngOnInit(): void {
    const storeMock = localStorage.getItem('mockBudgets');
    if (storeMock) {
      this.mockBudgetData = JSON.parse(storeMock);
    }
    //localStorage.setItem('mockBudgets', '');
    this.getAllBudget();
    console.log('income:', this.income);
    console.log('spent:', this.spent);
  }

  isLastItem(index: number): boolean {
    return index === this.mockBudgetData.length - 1;
  }
  getAllBudget() {
    return (this.budgets = this.service.fetchAll());
  }

  data: ChartData<'bar'> = {
    labels: ['Entrée', 'Sortie'],
    datasets: [
      {
        data: [
          (this.income = this.service.fetchedByType('entrée')),
          (this.spent = this.service.fetchedByType('sortie')),
        ],
      },
    ],
  };

  //Fait une version qui va fetch dans le local storage
  dataCategory: ChartData<'doughnut'> = {
    labels: ['Alimentaire', 'Transports', 'Loisirs'],
    datasets: [
      {
        data: [
          (this.categorySpent1 = this.service.fetchByCategory('alimentaires')),
          (this.categorySpent2 = this.service.fetchByCategory('transports')),
          (this.categorySpent3 = this.service.fetchByCategory('loisirs')),
        ],
      },
    ],
  };

  //Fait un ng on destroy
}
