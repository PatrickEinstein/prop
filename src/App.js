import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Drawer2 from "./Components/Drawer";
import ProjectsTable from "./Components/Projects";
import Profilepage from "./Screens/Profilepage";
import World from "./Screens/WorldInvestment";
import PersistentDrawerLeft from "./Components/PersistDrawer";
import Projectpage from "./Screens/ProjectPage";
import ConnectWallet from "./Screens/ConnectWallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<PersistentDrawerLeft />} />
          <Route path="/test" element={<ProjectsTable />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/world" element={<World />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/pay" element={<ConnectWallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
