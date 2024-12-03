import { useState } from "react";

const TodoInput = ({ createTodo }) => {
  const [input, setInput] = useState("");

  // const onChangeInput = (e) => {
  //   console.log(e.target.value);
  //   setInput(e.target.value);
  // };

  const onClickButton = () => {
    if (input.trim()) {
      // trim() 메서드 기억하기
      createTodo(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onClickButton();
    // Enter를 누르면 할 일 추가
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onClickButton}>추가하기</button>
    </div>
  );
};

export default TodoInput;
