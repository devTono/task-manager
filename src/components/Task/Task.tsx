import { useDispatch } from "react-redux";
import { Task as TaskType } from "../../types";
import { deleteTask, toggleComplete } from "../../redux/reducer";

interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>삭제</button>
    </div>
  );
}
