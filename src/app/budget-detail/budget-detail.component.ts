import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { iBudget } from '../../shared/entities';
import { BudgetService } from '../../shared/services/budget.service';

@Component({
  selector: 'app-budget-detail',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './budget-detail.component.html',
  styleUrl: './budget-detail.component.css',
})
export class BudgetDetailComponent implements OnInit {
  //Fait un new form data pour ajouter un paiment
  budget: iBudget[] = [];
  income: number = 0;
  spent: number = 0;
  categorySpent1: number = 0;
  categorySpent2: number = 0;
  categorySpent3: number = 0;
  categorySpent4: number = 0;

  service = inject(BudgetService);

  ngOnInit(): void {
    this.getAllBudget();
    console.log('income:', this.income);
    console.log('spent:', this.spent);
  }

  getAllBudget() {
    return (this.budget = this.service.fetchAll());
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
