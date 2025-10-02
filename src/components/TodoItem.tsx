import "../styles/TodoItem.css";
import { TodoType } from "../App";

interface TodoItemProps {
  todo: TodoType;
  toggleComplete(id: number): void;
}

const TodoItem = ({ todo, toggleComplete }: TodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
