import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducer";
import { Task } from "../../types";

export default function AddTask() {
  const [taskName, setTaskName] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name: taskName,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTaskName("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full my-1 p-2 flex justify-between bg-gray-300">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="pl-4"
      />
      <button type="submit">추가</button>
    </form>
  );
}
