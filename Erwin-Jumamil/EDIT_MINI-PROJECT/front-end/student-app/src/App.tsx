import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navigation } from "./components";
import { AddStudent } from "./components/addstudent/AddStudent";
import { ListOfStudent } from "./components/listofstudent/ListOfStudent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ListOfStudent />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addstudent/:_id" element={<AddStudent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
