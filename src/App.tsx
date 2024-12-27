import "./App.css";
import { useState } from "react";
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from './components/Task/Task.tsx';

interface ITask {
  task: string;
  id: string;
}

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { task: "Buy milk", id: '1' },
    { task: "Walk with dog", id: '2' },
  ]);

  const [input, setInput] = useState<string>("");

  const deleteTask = () => {

  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
    const copyTasks = [...tasks];
    const newTasks = {
      task: input,
      id: String(new Date()),
    };
    copyTasks.push(newTasks);
    setTasks(copyTasks);
  };

  return (
      <>
        <div>
       <AddTaskForm onAddTask={ addNewTask } input={input} setInput={ e => setInput( e.target.value ) } />
        </div>
        <hr/>
        <h2>ToDo List</h2>
        <div>
          {tasks.map(task => (
            <Task
              key = { task.id }
              task = { task.task }
              onTaskDelete={() => deleteTask( task.id )}
            />
          ))}
        </div>
      </>
  );
};

export default App;
