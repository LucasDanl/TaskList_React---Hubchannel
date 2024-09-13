import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function TodoApp() {

  const [task, setTask] = useState('');
  const [listTasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...listTasks, task]); 
      setTask(''); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (index) => {
    const createTask = listTasks.filter((_, i) => i !== index); // Remove a tarefa pelo índice
    setTasks(createTask);
  };


  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TextField
          required
          id="standard-required"
          label="Digite uma tarefa"
          variant="standard"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          />      
      <Button onClick={addTask}>Adicionar Tarefa</Button>

      <List>
        {listTasks.map((task, index) => (
          <ListItem key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={task}
            />
          </ListItem>
        ))}
      </List>

    </div>
  );
}

export default TodoApp;
