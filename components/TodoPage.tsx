"use client";
import { Idata } from "@/types/data.types";
import { CreateHandler } from "@/utils/CreateHandler";
import { DeleteHandler } from "@/utils/DeleteHandle";
import { fetchTasks } from "@/utils/FetchTask";
import {EditHandler, UpdateHandler } from "@/utils/UpdateHandler";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTasks(setTask);
  }, []);


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
            onClick={(e) => UpdateHandler(e,id,text,setText,setUpdate,setId,setTask)}
          >
            <span className="material-symbols-outlined">library_books</span>
          </button>
        ) : (
          <button
            className="add_button"
            type="submit"
            onClick={(e) => CreateHandler(e,text,setText,setTask)}
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
            {task.map((t:Idata) => (
              <tr key={t._id}>
                <td>{t._id}</td>
                <td>{t.text}</td>
                <td className="action_button">
                  <button
                    className="edit_button"
                    onClick={() => EditHandler(setText, setUpdate, setId, t._id, t.text)}
                  >
                    <span className="material-symbols-outlined">edit_note</span>
                  </button>
                  <button
                    className="delete_button"
                    onClick={() => DeleteHandler(t._id, setTask)}
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
