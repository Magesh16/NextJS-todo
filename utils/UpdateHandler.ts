import { UpdateData } from "@/types/data.types";
import { Dispatch, SetStateAction } from "react";
import { fetchTasks } from "./FetchTask";


export const UpdateHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string, text: string, setText: Dispatch<SetStateAction<string>>, setUpdate: Dispatch<SetStateAction<boolean>>, setId: Dispatch<SetStateAction<string>>, setTask: React.Dispatch<React.SetStateAction<never[]>>) => {

    e.preventDefault();
    const response = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });

    if (response.ok) {
        console.log("Task updated successfully");
        fetchTasks(setTask);
        setText("");
        setId("");
        setUpdate(false);
    } else {
        console.log("Failed to update task");
    }
};

export const EditHandler = async (setText: Dispatch<SetStateAction<string>>, setUpdate: Dispatch<SetStateAction<boolean>>, setId: Dispatch<SetStateAction<string>>,id: string, text: string) => {
    setText(text);
    setUpdate(true);
    setId(id);
  };