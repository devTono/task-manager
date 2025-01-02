import { useDispatch } from "react-redux";
import { Task as TaskType } from "../../types";
import { deleteTask, toggleComplete } from "../../redux/reducer";

interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="pl-2 flex-1">
        <label
          className="flex gap-4 cursor-pointer"
          htmlFor={task.id.toString()}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
            id={task.id.toString()}
          />
          {task.name}
        </label>
      </div>
      <button onClick={() => dispatch(deleteTask(task.id))} className="whitespace-nowrap">삭제</button>
    </div>
  );
}
