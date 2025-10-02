import TodoItem from "./TodoItem";
import "../styles/TodoList.css";
import { TodoType } from "../App";

interface TodoListProps {
  todos: TodoType[];
  toggleComplete(id: number): void;
  showCompleted: boolean;
}

//2. 전달받은 props가 올바른 타입으로 인식되도록 타입을 적용하세요.
//힌트 : 리액트에서 props의 타입을 정의하는 방법 -> ({props 이름} : props타입)
const TodoList = ({ todos, toggleComplete, showCompleted }: TodoListProps) => {
  return (
    <ul>
      {todos
        .filter((todo) => (showCompleted ? true : !todo.completed))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
    </ul>
  );
};

export default TodoList;
