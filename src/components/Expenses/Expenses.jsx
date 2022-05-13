import React,{useState} from 'react'
import '../../styling/Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [selectedYear,setSelectedYear] =useState('2020')
  const ChangeYearDataHandler = (selectedYearData) => {
setSelectedYear(selectedYearData);
  };
const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === selectedYear;
});

  return (
    <li>
      
    <Card className="expenses">
    <ExpensesFilter selectedYear={selectedYear} onChangeYearData={ChangeYearDataHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList list={filteredExpenses} />
</Card>
    </li>
  );
};

export default Expenses