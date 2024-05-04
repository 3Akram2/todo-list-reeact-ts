import React from "react";
import TodoType from "../types/TodoType"; // Assuming you have a Todo interface defined in types.ts
import { Grid, Typography } from "@mui/material";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <Grid className={`task ${todo.reminder ? "reminder" : ""}`}>
      <Typography variant="h3">{todo.title}</Typography>
      <Typography variant="subtitle2">{todo.day}</Typography>
    </Grid>
  );
};

export default Todo;
