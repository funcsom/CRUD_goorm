import TodoItem from "./TodoItem";

const TodoList = ({ todos, checkTodo, editTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        // console.log(todo);
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
