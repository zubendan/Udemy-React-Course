import { useState } from 'react'
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false);

  const DataSaveHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onDataSave={DataSaveHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;
