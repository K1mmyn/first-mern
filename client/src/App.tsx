import React, { useEffect, useState } from "react";
import { createSubect } from "./api/createSubject";
import { getSubjects } from "./api/getSubjects";
import { deleteSubject } from "./api/deleteSubject";

export type SubjectType = { title: string; todos: string[]; _id: string };

const App = () => {
  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [title, setTitle] = useState("");

  const handleCreateSubject = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title) {
      return alert("Please input a title");
    }
    const newSubject = await createSubect(title);
    setSubjects([...subjects, newSubject]);
    setTitle("");
  };

  const handleDelete = async (subjectId: string) => {
    await deleteSubject(subjectId);
    setSubjects((prev) => prev.filter((s: SubjectType) => s._id !== subjectId));
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjects = await getSubjects();
      setSubjects(subjects);
    };
    fetchSubjects();
  }, []);

  return (
    <div className="text-xl text-white w-full border-2 border-white flex justify-center items-center flex-col">
      <div className="grid grid-cols-3">
        {subjects.map((subject: SubjectType) => (
          <div className="border-2 border-white w-64 h-52 flex justify-center items-center relative" key={subject._id}>
            <a href={`/subjects/${subject._id}`}>{subject.title}</a>
            <p className="absolute top-3 right-3 cursor-pointer" onClick={() => handleDelete(subject._id)}>
              X
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCreateSubject}>
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
  );
};

export default App;
