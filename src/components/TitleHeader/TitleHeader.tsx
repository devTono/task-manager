import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { AppState, Filter } from "../../types";
import { setFilter } from "../../redux/reducer";

export default function TitleHeader() {
  const { tasks, filter } = useAppSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const counts = {
    ALL: tasks.length,
    COMPLETED: tasks.filter((task) => task.completed).length,
    INCOMPLETE: tasks.filter((task) => !task.completed).length,
  };

  const buttons = [
    {
      label: "전체",
      filterKey: "ALL" as Filter,
      color: "white",
      textColor: "white",
      // color: "bg-white",
      // textColor: "text-white",
    },
    {
      label: "완료",
      filterKey: "COMPLETED" as Filter,
      color: "#22C55E",
      textColor: "#22C55E",
      // color: "bg-green-500",
      // textColor: "text-green-500",
    },
    {
      label: "미완료",
      filterKey: "INCOMPLETE" as Filter,
      color: "#EF4444",
      textColor: "#EF4444",
      // color: "bg-red-500",
      // textColor: "text-red-500",
    },
  ];

  return (
    <div className="border-b-2 pb-1">
      <h1 className="pb-3 text-bold">Task Manager</h1>
      <div className="flex text-sm justify-center">
        {buttons.map(({ label, filterKey, color, textColor }) => (
          <button
            key={filterKey}
            className={"flex-auto text-[0.95em] font-bold w-[80px] "}
            onClick={() => dispatch(setFilter(filterKey))}
            style={{
              background: filter === filterKey ? color : "#1a1a1a",
              color: filter === filterKey ? "#1a1a1a" : textColor,
            }}
          >
            {label}: {counts[filterKey]}개
          </button>
        ))}
      </div>
    </div>
  );
}
