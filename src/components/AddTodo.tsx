import React, { useState } from "react";
import { TextField, Checkbox, Button,Grid,Fade } from "@mui/material";
import TodoType  from "../types/TodoType";

interface AddTodoProps {
    onAdd: (todo: TodoType) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Please add a todo');
            return;
        }
        onAdd({ title, day, reminder });
        setTitle('');
        setDay('');
        setReminder(false);
    };

    return (
        <Fade in={true} timeout={1000}>
        <form  onSubmit={onSubmit}>
           <Grid container>
            <Grid md={12} mt={1} >
                <TextField
                    type='text'
                    label='Title'
                    placeholder='Add Todo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                />
            </Grid>
            <Grid md={12} mt={1} >
                <TextField
                    type='text'
                    label='Day'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="input"
                />
            </Grid>
            <Grid md={12} mt={1} >
                <label>Set Reminder</label>
                <Checkbox
                    checked={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                    color="success"
                    
                />
            </Grid>
            <Button type='submit' variant='contained' color='success' sx={{margin:'auto'}}>
                Save Todo
            </Button>
            </Grid>
        </form>
        </Fade>
        
    );
};

export default AddTodo;
