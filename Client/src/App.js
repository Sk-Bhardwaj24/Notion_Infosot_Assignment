import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Component/Admin/Admin";
import Registeradmin from "./Component/Admin/Registeradmin";
import Createmovie from "./Component/Movie/Createmovie";
import Edit from "./Component/Home/Edit";

import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createMovie" element={<Createmovie />} />
        <Route path="/register" element={<Registeradmin />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
