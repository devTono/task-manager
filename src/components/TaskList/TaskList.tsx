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
  if (filteredTasks.length === 0) return null;
  return (
    <div className="flex flex-col gap-4 px-2 py-3 bg-[#2c2b2b] max-h-[440px] overflow-y-auto ">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
