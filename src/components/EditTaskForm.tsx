import { useState } from "react";
import { apiClient } from "../clients/api";
import type { Task, EditTaskFormProps } from "../types";
// import type { TaskFormProps } from "./TaskForm";



function EditTaskForm({ task, onUpdate, projectId}: EditTaskFormProps){
    //local stat
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const res = await apiClient.put(`/api/projects/${projectId}/tasks/${task._id}`, {title,description,status,project:projectId});
            console.log("updated task", res.data);
            onUpdate(res.data);
        } catch (error: any) {
            console.error(error);
            setError(error.message);
        }finally {
            setLoading(false);
        }
        
    }

 

    return(
        <div>
            <h1>Edit form</h1>
        <form onSubmit={handleSubmit}>
            <h2>Edit Task</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <button type= 'submit' disabled={loading}>
                {loading? "Saving..." : "Save Changes" }
            </button>
        </form>
        </div>
    );
}

export default EditTaskForm;