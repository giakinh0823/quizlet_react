import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/common/Header";
import Home from "./features/home/page";

function App() {
  return (
    <Box className="App">
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
