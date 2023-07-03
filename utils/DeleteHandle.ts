import { fetchTasks } from "./FetchTask";

export const DeleteHandler = async (id: string, setTask:React.Dispatch<React.SetStateAction<never[]>>) => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      fetchTasks(setTask);
    } catch (err) {
      console.log(err);
    }
  };