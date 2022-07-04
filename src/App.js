import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id: 'sku1',
    title: "Car Insurance",
    amount: 302.98,
    date: new Date(2021, 2, 30),
  },
  {
    id: "sku2",
    title: "Birthday Expenses",
    amount: 1500.0,
    date: new Date(2020, 7, 23),
  },
  {
    id:"sku3",
    title: "House Rental",
    amount: 500.08,
    date: new Date(2021, 4, 11),
  },
  {
    id:"sku4",
    title: "Electricity Bill",
    amount: 102.98,
    date: new Date(2022, 5, 24),
  },
];


const App = () => {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };

    return (
    <div>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses items = {expenses}/>
    </div>
  ); 

  //THIS IS ALTERNATIVE - Just import React from react//
  /** return React.createElement(
    "div",
    {},
    React.createElement(
      "h2",
      {},
      "Let's get started..",
      React.createElement(Expenses, { items: expenses })
    )
  ); */

}

export default App; //kinahanglan eexport para maaccess or magamit sa lain nga components.
