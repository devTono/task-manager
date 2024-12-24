export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export type Filter = "ALL" | "COMPLETE" | "INCOMPLETE";

export interface AppState {
  tasks: Task[];
  filter: Filter;
}