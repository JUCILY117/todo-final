import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { DataProvider } from "./context/DataContext";
import PageNotFound from "./Components/PageNotFound";
import Home1 from "./Components/Home1";
import AddTodo from "./Components/AddTodo";
import EditTodo from "./Components/EditTodo";
import TaskDetails from "./Components/TaskDetails";
import First from "./Components/First";
import { Switch } from "@mui/material";

function App() {
  return (
    <DataProvider>
        <div className="App">
        <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Switch>
      <Route path="/First" element={<First />} />
      </Switch> */}
        </div>
      </DataProvider>
  );
}

export default App;
