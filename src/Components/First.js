import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import TaskDetails from "./TaskDetails";
import { DataProvider } from "../context/DataContext";
import PageNotFound from "./PageNotFound";

const First = () => {


  return (
    <DataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/edit" element={<EditTodo />} />
            <Route path="/todo/:id" element={<TaskDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
    </DataProvider>
  );
};

export default First;
