import "./AddTaskForm.css";

interface Props {
  onAddTask: (e: React.FormEvent) => void;
  input: string;
  setInput: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<Props>  = ({onAddTask, input, setInput}) => {
  return (
    <div className="taskForm">
      <form onSubmit={onAddTask}>
      <input className="userTaskInput" type="text" value={input} placeholder="Add Task" onChange={setInput} />
      <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;