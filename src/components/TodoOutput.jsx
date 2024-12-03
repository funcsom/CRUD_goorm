const TodoOutput = ({ todos, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                updateTodo(todo.id);
              }}
            ></input>
            {todo.content}
          </div>
        );
      })}
    </div>
  );
};

export default TodoOutput;
