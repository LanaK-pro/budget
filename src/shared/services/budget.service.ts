import { Injectable } from '@angular/core';
import { mockBudgets } from '../mock/mockBudget';
import { iBudget } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private mockData: iBudget[] = mockBudgets;

  constructor() {
    const storedData = localStorage.getItem('mockBudgets');
    if (storedData) {
      this.mockData = JSON.parse(storedData);
    }
  }

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
  saveFormData(newBudget: iBudget) {
    console.log('New budget received:', newBudget);
    this.mockData.push(newBudget);
    localStorage.setItem('mockBudgets', JSON.stringify(this.mockData));
  }
}
