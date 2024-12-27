import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from './components/Task/Task.tsx';

interface ITask {
  task: string;
  id: string;
}

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {task: 'Buy milk', id: '1'},
    {task: 'Walk with dog', id: '2'},
  ]);

  const [input, setInput] = useState<string>('');

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTasks = {
      task: input,
      id: String(new Date()),
    };
    setTasks(prevState => [...prevState, newTasks]);
    setInput('');
  };

  const deleteTask = (idTask: string) => {
    setTasks(prevState => prevState.filter((task) => task.id !== idTask));
  };

  return (
    <>
      <div>
        <AddTaskForm onAddTask={addNewTask} input={input} setInput={e => setInput(e.target.value)}/>
      </div>
      <hr/>
      <h2>Task List</h2>
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task.task}
            onTaskDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </>
  );
};

export default App;
