import React, { useEffect, useState } from "react";
import { getSubject } from "./api/getSubject";
import { useParams } from "react-router-dom";
import { SubjectType } from "./App";
import { createTodo } from "./api/createTodo";
import { deleteTodo } from "./api/deleteTodo";

type SubjectProps = {};

const Subject: React.FC<SubjectProps> = () => {
  let { subjectId } = useParams();
  const [subject, setSubject] = useState<SubjectType | null>(null);
  const [title, setTitle] = useState("");

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectId) {
      return;
    }
    const fetchedSubject = await createTodo(subjectId, title);
    setSubject(fetchedSubject);
    setTitle("");
  };

  useEffect(() => {
    const fetchSubject = async () => {
      if (!subjectId) return;
      const fetchedSubject = await getSubject(subjectId);
      setSubject(fetchedSubject);
    };
    fetchSubject();
  }, [subjectId]);

  const handleDelete = async (subjectIndex: number) => {
    if (!subjectId) {
      return;
    }

    const subjectWithDeletedTodo = await deleteTodo(subjectId, subjectIndex);
    console.log(subjectWithDeletedTodo);

    setSubject(subjectWithDeletedTodo);
  };

  return (
    <div className="text-white">
      <h1 className="text-center uppercase text-6xl my-4">{subject?.title}</h1>
      <div className="text-xl text-white w-full border-2 border-white flex justify-center items-center flex-col">
        <div className="grid grid-cols-3 text-white">
          {subject?.todos.map((todo: string, index) => (
            <div className="border-2 border-white w-64 h-52 flex justify-center items-center relative" key={`${todo}`}>
              <p>{todo}</p>
              <p className="absolute top-3 right-3 cursor-pointer" onClick={() => handleDelete(index)}>
                X
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={handleCreateTodo}>
          <label htmlFor="createSubject">New Subject</label>
          <input
            type="text"
            id="createSubject"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            className="bg-transparent border-2 border-white m-6 p-2"
          />
          <button type="submit" className="border-[1px] border-white px-4 py-2">
            {" "}
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
export default Subject;
