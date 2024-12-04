import { useEffect, useState } from "react";
import TodoNavigation from "./components/TodoNavigation";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./css/App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    // 로컬 스토리지에 todos라는 객체를 가져와서 storedTodos 변수에 할당
    return storedTodos ? JSON.parse(storedTodos) : [];
    // 로컬 스토리지에 데이터가 있으면 파싱으로 가져오고, 없으면 빈 배열로 초기화
    // 반환되는 내용이 todos가 됨
  });

  const [filteredTodos, setfilteredTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    // 여기 조금 더 생각하기
    if (filter === "All") {
      setfilteredTodos(todos);
    } else if (filter === true) {
      setfilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (filter === false) {
      setfilteredTodos(todos.filter((todo) => todo.completed === false));
    }
  }, [filter, todos]);
  // useEffect를 통해 localStorage에 비동기 등록함

  const createTodo = (content) => {
    setTodos([...todos, { id: Date.now(), content, completed: false }]); // id값을 timestamp로 쓰는것이 자명함
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, content) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: content } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h1>한게 없는 성소민 정신차리자</h1>
      <TodoNavigation setFilter={setFilter} />
      <TodoInput createTodo={createTodo} />
      <TodoList
        todos={filteredTodos}
        checkTodo={checkTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
