import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const yearFilterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses" >
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={yearFilterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

/*
            basic javascript : if we use && operator and
            first statement is true than
            js simply return the second statement
    {filteredExpenses.length === 0 && <p>No Expenses found here !</p>}
    {filteredExpenses.length > 0 && filteredExpenses.map(expense =>
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    )}}
*/


export default Expenses;