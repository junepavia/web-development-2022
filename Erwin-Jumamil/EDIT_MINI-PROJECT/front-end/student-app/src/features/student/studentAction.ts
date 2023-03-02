import axios from "axios";
import { AppThunk } from "../../app/store";
import { IStudent } from "../../model/studentinterface";
import {
  addStudent,
  editStudent,
  getStudent,
  getStudentData,
  removeStudent,
} from "./studentSlice";

export const addStudentaction =
  (student: IStudent): AppThunk =>
  async (dispatch) => {
    try {
      await axios.post("http://localhost:5000/users", student);
    } catch (error) {
      console.log(error);
    }
    dispatch(addStudent(student));
    dispatch(getStudentaction());
  };
export const getStudentaction = (): AppThunk => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:5000/users");
    dispatch(getStudent(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const removeStudentaction =
  (student: IStudent): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(removeStudent(student._id));
      await axios.delete(`http://localhost:5000/users/${student._id}`);
      dispatch(getStudentaction());
    } catch (error) {
      console.log(error);
    }
  };

export const editStudentaction =
  (student: IStudent): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(editStudent(student));
      await axios.patch(`http://localhost:5000/users/${student._id}`, {
        name: student.name,
        grade: student.grade,
        age: student.age,
        gender: student.gender,
        guardiansname: student.guardiansname,
        dream: student.dream,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getStudentDataAction =
  (student: string): AppThunk =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/users/${student}`,
        {}
      );

      dispatch(getStudentData(data));
    } catch (error) {
      console.log(error);
    }
  };
