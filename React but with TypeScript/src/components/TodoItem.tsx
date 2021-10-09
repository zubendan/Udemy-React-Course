import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ onRemove: () => void; text: string }> = (props) => {
  return (
    <li onClick={props.onRemove} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
