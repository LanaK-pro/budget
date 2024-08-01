import { iBudget } from '../entities';

export const mockBudgets: iBudget[] = [
  {
    // id: 1,
    amount: 45,
    date: new Date('2024-11-01'),
    category: 'loisirs',
    place: 'Cinéma Gaumont',
    type: 'sortie',
  },
  {
    // id: 2,
    amount: 1850,
    date: new Date('2024-11-05'),
    category: 'salaire',
    place: 'Entreprise XYZ',
    type: 'entrée',
  },
  {
    // id: 3,
    amount: 250,
    date: new Date('2024-11-10'),
    category: 'alimentaires',
    place: 'Supermarché Leclerc',
    type: 'sortie',
  },
  {
    // id: 4,
    amount: 70,
    date: new Date('2024-11-15'),
    category: 'remboursement',
    place: 'Assurance',
    type: 'entrée',
  },
  {
    // id: 5,
    amount: 113,
    date: new Date('2024-11-20'),
    category: 'transports',
    place: 'SNCF',
    type: 'sortie',
  },
  {
    // id: 6,
    amount: 54,
    date: new Date('2024-11-25'),
    category: 'loisirs',
    place: 'Amazon',
    type: 'sortie',
  },
];
