import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudent } from "../../model/studentinterface";

const initialState: { students: IStudent[]; studentData: IStudent | null } = {
  students: [],
  studentData: null,
};

export const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudent: (state, action: PayloadAction<IStudent[]>) => {
      state.students = action.payload;
    },
    addStudent: (state, action: PayloadAction<IStudent>) => {
      state.students.push(action.payload);
    },

    removeStudent(state, action) {
      const { _id } = action.payload;
      state.students.filter((student) => student._id !== _id);
      // if (filterUser) {
      //   state.students.filter((student) => student._id !== _id);
      // }
    },
    editStudent: (state, action: PayloadAction<IStudent>) => {
      state.students.push(action.payload);
    },
    getStudentData: (state, action: PayloadAction<IStudent>) => {
      state.studentData = action.payload;
    },
    removeStudentData: (state) => {
      state.studentData = null;
    },
  },
});

export default StudentSlice.reducer;
export const {
  addStudent,
  removeStudent,
  getStudent,
  editStudent,
  getStudentData,
  removeStudentData,
} = StudentSlice.actions;
