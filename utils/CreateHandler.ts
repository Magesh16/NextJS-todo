import { Dispatch, SetStateAction } from "react";
import { fetchTasks } from "./FetchTask";

export const CreateHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, text:String,setText: Dispatch<SetStateAction<string>>,setTask:React.Dispatch<React.SetStateAction<never[]>> ) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tasks/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      });

      if (response.ok) {
        console.log("Posted successfully");
        setText("");
        fetchTasks(setTask);
      }
    } catch (err) {
      console.log("Error to create post");
    }
  };