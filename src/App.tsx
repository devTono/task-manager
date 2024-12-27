import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <Provider store={store}>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </Provider>
  );
}

export default App;
