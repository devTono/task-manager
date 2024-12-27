import { useAppSelector } from "../../redux/hooks";
import { AppState } from "../../types";
import Task from "../Task/Task";

export default function TaskList() {
  const { tasks, filter } = useAppSelector((state: AppState) => state);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.completed;
    if (filter === "INCOMPLETE") return !task.completed;
    return true;
  });
  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
