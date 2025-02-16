export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
  assignee: string; // Added assignee to the interface
}
