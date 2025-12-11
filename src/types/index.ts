export interface Project {
  name: string;
  description: string;
  _id: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  githubId?: string;
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
}

export interface EditTaskFormProps {
  task: Task;
  onUpdate(updatedTask: Task): void;
  projectId: string | undefined;
}

export type TaskFormProps = {
  projectId: string;
  onTaskCreate: (task: Task) => void;
};
