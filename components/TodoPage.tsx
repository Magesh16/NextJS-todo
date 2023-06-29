"use client";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [task, setTask] = useState([]);
  const [id, setId] = useState("");

  const handleClick = async (e: any) => {
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
      console.log(response);

      if (response.ok) {
        console.log("Posted successfully");
        setText("");
        fetchTasks();
      }
    } catch (err) {
      console.log("Error to create post");
    }
  };

  const handleUpdate = async (e: any) => {
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
      fetchTasks();
      setText("");
      setId("");
      setUpdate(false);
    } else {
      console.log("Failed to update task");
    }
  };

  const fetchTasks = async () => {
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
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = async (id: string, text: string) => {
    setText(text);
    setUpdate(true);
    setId(id);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="heading">
        <h2>Todo App NextJS</h2>
      </div>

      <div className="input_button">
        <input
          type="text"
          id="inputText"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {update ? (
          <button
            className="add_button"
            type="submit"
            onClick={(e) => handleUpdate(e)}
          >
            <span className="material-symbols-outlined">library_books</span>
          </button>
        ) : (
          <button
            className="add_button"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        )}
      </div>

      <div className="table_class">
        <table>
          <tbody>
            <tr>
              <th className="action_button">S.No</th>
              <th>Tasks</th>
              <th >Actions</th>
            </tr>
            {task.map((t:any) => (
              <tr key={t._id}>
                <td>{t._id}</td>
                <td>{t.text}</td>
                <td className="action_button">
                  <button
                    className="edit_button"
                    onClick={() => handleEdit(t._id, t.text)}
                  >
                    <span className="material-symbols-outlined">edit_note</span>
                  </button>
                  <button
                    className="delete_button"
                    onClick={() => handleDelete(t._id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoPage;
