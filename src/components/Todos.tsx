import React from "react";
import Todo from "./Todo";
import TodoType from "../types/TodoType"; // Assuming you have a Todo interface defined in types.ts
import { Grid,Fade } from "@mui/material";

interface TodoProps {
  todos: TodoType[];
}

const Tasks: React.FC<TodoProps> = ({ todos }) => {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      {todos.map((todo,index) => (
        <Fade in={true} key={todo.title} timeout={500 + index * 100}>
        <Grid item >
        <Todo key={todo.title} todo={todo} />
        </Grid>
        </Fade>
      ))}
    </Grid>
  );
};

export default Tasks;
