import React, { ChangeEvent, useEffect, useState } from "react";
import { StudentUpdate } from "./Component/studentupdate/studentupdate.component";
import { IStudent } from "./model/anime.model";

export const App = () => {
  const [tempname, setTempName] = useState<string>("");
  const [tempuser, setTempUser] = useState("");
  const [tempemail, setTempEmail] = useState("");
  const [id, setId] = useState<number>(11);
  const [searchField, setSearchField] = useState(" ");
  const [studentlist, setStudentList] = useState<IStudent[]>([]);
  const [filterstudent, setFilterStudent] = useState(studentlist);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setStudentList(users));
  }, []);
  useEffect(() => {
    const newFilteredStudent = studentlist.filter((student: IStudent) => {
      return student.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterStudent(newFilteredStudent);
  }, [studentlist, searchField]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "studentname") {
      setTempName(e.target.value);
    }
    if (e.target.name === "user") {
      setTempUser(e.target.value);
    }
    if (e.target.name === "email") {
      setTempEmail(e.target.value);
    }
  };
  const addStudent = (): void => {
    if (!tempname) return;
    if (!tempuser) return;
    if (!tempemail) return;
    const newStudentList = {
      id: id,
      name: tempname,
      username: tempuser,
      email: tempemail,
    };
    setFilterStudent([...filterstudent, newStudentList]);
    setTempName("");
    setTempUser("");
    setTempEmail("");
    setId(id + 1);
  };
  const deleteStudent = (id: number): void => {
    const updatedStudentList = filterstudent.filter(
      (student: IStudent) => student.id !== Number(id)
    );
    setStudentList(updatedStudentList);
  };

  const onSearchChange = (
    callEvent: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const searchFieldString = callEvent.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div>
      <div>
        <input type="search" className="search-box" onChange={onSearchChange} />
        <label htmlFor="idnumber">Student Name</label>
        <input
          required
          type="text"
          name="studentname"
          value={tempname}
          onChange={onChangeHandler}
        />
        <label htmlFor="user">User</label>
        <input
          type="text"
          name="user"
          value={tempuser}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={tempemail}
          onChange={onChangeHandler}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div>
        {filterstudent.map((student: IStudent) => {
          const { id, name, username, email } = student;
          return (
            <>
              <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
                <p>{email}</p>
                <p>{id}</p>
              </div>
              <button onClick={() => deleteStudent(id)}>X</button>
              <button onClick={() => StudentUpdate(id)}>EDIT</button>
            </>
          );
        })}
      </div>
    </div>
  );
};
