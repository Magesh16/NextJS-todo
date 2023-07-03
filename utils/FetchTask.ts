import { useEffect } from "react";

export const fetchTasks = async (setTask:React.Dispatch<React.SetStateAction<never[]>>) => {
    try {
      const response = await fetch("/api/tasks");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTask(data);
      }
    } catch (err) {
      console.log("Error fetching tasks:", err);
    }
  };
 