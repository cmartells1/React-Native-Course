import { View } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-12-01'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 75.99,
    date: new Date('2022-12-01'),
  },
  {
    id: 'e3',
    description: 'bananas',
    amount: 7.85,
    date: new Date('2023-11-28'),
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 30.25,
    date: new Date('2023-10-28'),
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 18.25,
    date: new Date('2023-10-31'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
