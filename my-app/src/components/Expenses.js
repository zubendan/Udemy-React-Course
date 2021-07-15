import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
