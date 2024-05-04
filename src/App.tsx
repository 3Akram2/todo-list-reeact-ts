import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AddTodo from "./components/AddTodo";
import TodoType from "./types/TodoType";
import Header from "./components/Header";
import { storeTodo } from "./axios/requests";
import Zoom from "@mui/material/Zoom";
import Todos from "./components/Todos";

const App: React.FC = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showZoom, setShowZoom] = useState(false);
  useEffect(() => {
    setShowZoom(true);
  }, []);
  const toggleAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  const addTask = async (todo: TodoType) => {
    const response = await storeTodo(todo);
    setTodos([...todos, response.data]);
    toggleAddTodo();
  };

  return (
    <Grid container>
      <Grid container className="container">
        <Zoom
          in={showZoom}
          style={{ transitionDelay: showZoom ? "1000ms" : "0ms" }}
        >
          <Grid container>
            <Header
              title="Task Tracker"
              toggle={toggleAddTodo}
              showAddTask={showAddTodo}
            />
            {showAddTodo ? <AddTodo onAdd={addTask} /> : ""}
          </Grid>
        </Zoom>
      </Grid>
      <Grid container  justifyContent={'center'} alignItems={'center'}>
      <Grid item md={8} >
        <Todos todos={todos} />
      </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
