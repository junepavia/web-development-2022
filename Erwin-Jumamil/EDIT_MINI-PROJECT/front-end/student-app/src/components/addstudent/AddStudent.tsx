import ErrorList from "antd/es/form/ErrorList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addStudentaction,
  editStudentaction,
  getStudentDataAction,
} from "../../features/student/studentAction";
import { CustomModal } from "../../modal/modalAdd/customModal";
import { studentSchema } from "../../validation/userValidation";

export const AddStudent = () => {
  const studentdata = useAppSelector((state) => state.student.studentData);
  const dispatch = useAppDispatch();
  const [student, setStudent] = useState({
    name: "",
    grade: "",
    age: 0,
    gender: "Male",
    guardiansname: "",
    dream: "",
  });
  const studentID = window.location.href.split("/")[4];
  const [modalVisibility, setModalVisibility] = useState(false);
  const [error, SetError] = useState(false);
  const [error1, SetError1] = useState(false);

  useEffect(() => {
    if (studentID) {
      dispatch(getStudentDataAction(studentID));
    }
  }, [studentID]);

  useEffect(() => {
    if (studentdata) {
      setStudent({
        name: studentdata.name,
        grade: studentdata.grade,
        age: studentdata.age,
        gender: studentdata.gender,
        guardiansname: studentdata?.guardiansname,
        dream: studentdata.dream,
      });
    }
  }, [studentID, studentdata]);

  const onChangeHandler = (
    events: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = events.target;
    if (name === "dream" || "guardiansname") {
      validationforStudent({ ...student, [name]: value });
    }
    return setStudent({ ...student, [name]: value });
  };

  const onSubmithandler = async (e: any) => {
    e.preventDefault();
    let toValidate = {
      name: e.target[0].value,
      grade: e.target[1].value,
      age: e.target[2].value,
      gender: e.target[3].value,
      guardiansname: e.target[4].value,
      dream: e.target[5].value,
    };
    const isValid = await studentSchema.isValid(toValidate);
    if (!isValid) {
      SetError1(true);
    } else {
      setModalVisibility(true);
    }

    studentID
      ? dispatch(editStudentaction({ ...student, _id: studentID }))
      : dispatch(addStudentaction(student));
  };
  const { name, grade, gender, age, guardiansname, dream } = student;
  const closeModal = (): void => {
    setModalVisibility(false);
  };

  const validationforStudent = (student: any) => {
    const firstChar = student.dream.charAt(0);
    const validationData = /\s/.test(firstChar);
    if (validationData === true) {
      SetError(true);
    } else {
      SetError(false);
    }
  };
  return (
    <div>
      <form className="flex justify-center " onSubmit={onSubmithandler}>
        <div className="mt-10 xl:w-96">
          <label htmlFor="studentname">Student Name:</label>
          <input
            required
            className="
            form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            value={name}
            name="name"
            onChange={onChangeHandler}
          />
          <label htmlFor="studentname">GRADE:</label>
          <input
            required
            className="
            form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            value={grade}
            name="grade"
            onChange={onChangeHandler}
          />
          <label htmlFor="studentname">Age:</label>
          <input
            required
            className="
            form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="number"
            value={age}
            name="age"
            onChange={onChangeHandler}
          />
          {error1 === true ? (
            <div style={{ color: "red", fontSize: "15px" }}>Invalid Data</div>
          ) : (
            ""
          )}
          <label htmlFor="studentname">Gender</label>
          <select
            className="
            form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={gender}
            name="gender"
            onChange={onChangeHandler}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="studentname">Guardian's Name</label>
          <input
            required
            className={`
            form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text `}
            // ${error === true ? "error" : ""}
            value={guardiansname}
            name="guardiansname"
            onChange={onChangeHandler}
          />
          {/* {error === true ? (
            <div style={{ color: "red", fontSize: "15px" }}>Invalid Data</div>
          ) : (
            ""
          )} */}
          <label htmlFor="studentname">I wanna be:</label>
          <textarea
            required
            className={` form-control block w-full px-3 py-1.5 text-base font-normal 
          text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
          rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
          focus:border-blue-600 focus:outline-none ${
            error === true ? "error" : ""
          }`}
            value={dream}
            name="dream"
            onChange={onChangeHandler}
          ></textarea>
          {error === true ? (
            <div style={{ color: "red", fontSize: "15px" }}>
              Must be realistic
            </div>
          ) : (
            ""
          )}
          {studentID ? (
            <button
              type="submit"
              className=" mt-3 inline-block px-6 py-2.5 bg-green-500 text-white 
          font-medium text-xs leading-tight uppercase rounded-full shadow-md 
          hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg 
          focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition 
          duration-150 ease-in-out"
            >
              Update Student
            </button>
          ) : (
            <button
              type="submit"
              className=" mt-3 inline-block px-6 py-2.5 bg-green-500 text-white 
          font-medium text-xs leading-tight uppercase rounded-full shadow-md 
          hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg 
          focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition 
          duration-150 ease-in-out"
            >
              Add Student
            </button>
          )}
          {modalVisibility && (
            <CustomModal closeModal={closeModal} isAddstudent={!studentID} />
          )}
        </div>
      </form>
    </div>
  );
};
