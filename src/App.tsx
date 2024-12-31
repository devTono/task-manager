import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import TitleHeader from "./components/TitleHeader/TitleHeader";

function App() {
  return (
    <div>
      <TitleHeader />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
