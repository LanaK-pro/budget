import { Injectable } from '@angular/core';
import { mockBudgets } from '../mock/mockBudget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  fetchAll() {
    return mockBudgets;
  }

  fetchedByType(type: string): number {
    return mockBudgets
      .filter((budget) => budget.type === type)
      .map((budget) => budget.amount)
      .reduce((total, amount) => total + amount, 0);
  }

  fetchByCategory(category: string): number {
    return mockBudgets
      .filter((budget) => budget.category === category)
      .map((budget) => budget.amount)
      .reduce((total, amount) => total + amount, 0);
  }
}
