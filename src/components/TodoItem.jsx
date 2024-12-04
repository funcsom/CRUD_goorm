import { useState } from "react";

const TodoItem = ({ todo, checkTodo, editTodo, deleteTodo }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.content);

  const onChangeChecked = () => {
    checkTodo(todo.id);
  };

  const onClickEditButton = () => {
    setOnEdit(!onEdit);
    editTodo(todo.id, editedTodo);
  };

  const onChangeTodo = (e) => {
    // console.log(e.target.value);
    setEditedTodo(e.target.value);
  };

  const onEnterKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode === 229) return;
    if (e.key === "Enter") {
      onClickEditButton();
    }
  };

  const onClickButton = () => {
    deleteTodo(todo.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onChangeChecked}
      />
      {!onEdit ? (
        todo.content
      ) : (
        <input
          value={editedTodo}
          onChange={onChangeTodo}
          onKeyDown={onEnterKeyDown}
        ></input>
      )}
      {!onEdit ? (
        <button onClick={onClickEditButton}>수정하기</button>
      ) : (
        <button onClick={onClickEditButton}>수정 완료하기</button>
      )}
      <button onClick={onClickButton}>삭제하기</button>
    </div>
  );
};

export default TodoItem;
