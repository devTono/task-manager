export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export type Filter = "ALL" | "COMPLETED" | "INCOMPLETE";

// TODO:: 왜 필요하지 ??
// reducer에 들어갈 initState의 타입이 였음
export interface AppState {
  tasks: Task[];
  filter: Filter;
}