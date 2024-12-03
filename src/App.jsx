import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";
import "./css/App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    // 로컬 스토리지에 todos라는 객체를 가져와서 storedTodos 변수에 할당
    return storedTodos ? JSON.parse(storedTodos) : [];
    // 로컬 스토리지에 데이터가 있으면 파싱으로 가져오고, 없으면 빈 배열로 초기화
    // 반환되는 내용이 todos가 됨

    // JSON은 객체 구조로 되어있는 문자열 => 파싱이란, 문자열을 객체로 변환하는 것
    // 객체를 문자열로 저장하는것은 stringify임
    // parsing, stringify를 이용하면 로컬 스토리지에 접근할 수 있는 것
    // 로컬 스토리지는 브라우저 캐시를 비우지 않는 이상 없어지지 않음 (일반적인것은 브라우저 끄거나 새로고침 하면 날라감)
    // 로컬 스토리지는 추후 DB와 연결됨
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // useEffect를 통해 localStorage에 등록함.

  const createTodo = (content) => {
    setTodos([...todos, { id: Date.now(), content, completed: false }]); // id값을 timestamp로 쓰는것이 자명함
  };

  const updateTodo = (id) => {
    setTodos(todos.map((item) => (item.id === id ? console.log(item) : item)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  return (
    <>
      {/* <button
        onClick={() => {
          updateTodo(1733206106759);
        }}
      >
        업데이트한다
      </button> */}
      <h1>오늘은 C만 한다</h1>
      <TodoInput createTodo={createTodo} />
      <TodoOutput todos={todos} updateTodo={updateTodo} />
    </>
  );
}

export default App;
