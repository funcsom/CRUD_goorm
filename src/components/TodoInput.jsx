import { useState } from "react";

const TodoInput = ({ createTodo }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickButton = () => {
    if (input.trim()) {
      // trim() 메서드 기억하기
      createTodo(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 229) return;
    // 이 코드 꼭 기억하자.
    if (e.key === "Enter") {
      onClickButton();
      // console.log(e);
    }
  };

  return (
    <div>
      <input value={input} onChange={onChangeInput} onKeyDown={handleKeyDown} />
      <button onClick={onClickButton}>추가하기</button>
    </div>
  );
};

export default TodoInput;
