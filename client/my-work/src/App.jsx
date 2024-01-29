import Sidebar from "./components/style/Sidebar";
import Upload from "./components/style/Upload";
import Uploaded from "./components/style/Uploaded";
import Form from "./components/style/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homes" element={<Uploaded/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
