import { useEffect, useState } from "react";
import { apiClient } from "../clients/api";
import { useParams } from "react-router-dom";
import type { Project } from "../types";
import type { Task } from "../types";
import TaskForm from "../components/TaskForm";

function ProjectDetailsPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();                   
  const [tasks, setTasks] = useState<Task[]>([]) //--->  //type safety, labeling array of Task

  const { projectId } = useParams();
console.log(tasks);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get(`/api/projects/${projectId}`);
        console.log(res.data);
        setProject(res.data);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);


  useEffect(() => {
    const fetchProjectTasks = async () => {
        try {
          setLoading(true);
            const res = await apiClient.get(`/api/projects/${projectId}/tasks`);
            console.log(res.data);
            setTasks(res.data);
        } catch (error: any) {
            console.error(error);
            setError(error);
        } finally {
          setLoading(false);
        }
    };

    fetchProjectTasks()
  }, [projectId]);


  if (loading) return <div className="text-3xl text-white">Loading...</div>;

  if (error) return <div className="text-3xl text-white">Error loading Project</div>;

  return (
    <div className="text-white">
      <h1 className="text-4xl">Project Details</h1>
    
      <div className="mt-10">
        <div className="text-3xl">{project?.name}</div>
        <div className="text-xl">{project?.description}</div>
      </div>

    <h1>Tasks</h1>
    {projectId && <TaskForm projectId={projectId} />}
     {tasks && tasks.map(task => (
       <div key= {task._id} className="mt-15">
        <div className="text-2x1">{task?.title}</div>
        <div className="text-2x1">{task?.description}</div>
        <div className="text-2x1">{task?.status}</div>
      </div>
     ))}


    </div>
  );
}

export default ProjectDetailsPage;