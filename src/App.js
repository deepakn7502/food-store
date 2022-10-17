import "./App.css";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadItem from "./Components/UploadItem";
import UpdateItem from "./Components/UpdateItem";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadItem />} />
          <Route path="/update" element={<UpdateItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
