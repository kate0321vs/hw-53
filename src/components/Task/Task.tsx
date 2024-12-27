import "./Task.css"

interface Props {
  task: string;
  onTaskDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const Task: React.FC<Props> = ({task, onTaskDelete}) => {
  return (
    <>
    <div className="taskContainer">
      <h4>{task}</h4>
    <button  className="deleteBtn" onClick={onTaskDelete}></button>
    </div>
    </>
  );
};

export default Task;