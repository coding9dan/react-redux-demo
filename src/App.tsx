import React from "react";
import Counter from "./components/Counter";
import SquareBox from "./components/SquareBox";
import "./App.css";
import { Transition } from "./components/Transition";
import { MovieAxios, MovieJson } from "./components/Movie";
import UserList from "./components/UserList";
import { Todos } from "./components/Todos";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <Counter message="Count" />
      <SquareBox />
      <Transition />
      <MovieAxios />
      <MovieJson />
      <UserList />
      <Todos />
      <InputForm />
    </div>
  );
}

export default App;
