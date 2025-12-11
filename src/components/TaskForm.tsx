// import { Link } from "react-router-dom";
import { apiClient } from "../clients/api";
import type { Task, TaskFormProps } from "../types";
import { useState } from "react";


//taskform is receiving props from project
function TaskForm ({ projectId, onTaskCreate }: TaskFormProps){
    // const [tasks, setTasks] = useState<Task[]>([]);
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

//submit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    setLoading(true);
    const res = await apiClient.post(`/api/projects/${projectId}/tasks`, { title, description, status });
    // notify parent
    onTaskCreate(res.data);

    // reset form
    setTitle('');
    setDescription('');
    setStatus('todo');
  } catch (error: any) {
    console.error(error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

return(
    <div className="text-white">
        <h1 className="text 4x1 font-bold text white">Tasks</h1>

        <form 
        onSubmit={handleSubmit}
        className="border p-2 h-50 mt-10 flex flex-col gap-2 rounded">

        <label htmlFor="task-title">Task Title: </label>
        <input 
        className="border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />


        <label htmlFor="task-description">Task Description</label>
        <input
          className="border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="task-status">Task Status: </label>
       <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])} className="border">
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
        </select>

        <button type="submit" disabled={loading} className="mt-auto bg-sky-500 rounded">
                    {loading ? 'Creating...' : 'Create Task'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}

        {/* <div className="w-full flex gap-5 mt-10">
            {tasks && tasks.map((task) =>(
                <div key={task._id}
                    className="text-white w-50 flex flex-col h-50 border border-red-500 p-2 text-center rounded" >
                    <div className="font-bold">{task.title}</div>
                    <div>{task.description}</div>
                    <div>{task.status}</div>
                    {projectId && <TaskForm projectId={projectId} onTaskCreate={handleTaskCreate} />}

                    {/* <Link 
                        to={`/tasks/${task._id}`}
                        className="mt-auto bg-sky-500 rounded">
                    
                        See Task
                    </Link> */}
                {/* </div>
            ))}
        </div> */} 

    </div>
);
}

export default TaskForm;


// When the user submits the form:
// Call your backend with fetch or Axios
// Send the projectId from props (passed by ProjectDetail)
// Clear the form
// Call taskcreated so ProjectDetail updates the task list


// The TaskForm should:

// Have fields: title, description, status

// Call a function passed from ProjectDetail (prop) like:

//POST the form data to your backend
//