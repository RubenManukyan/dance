import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Tutorials from "./components/tutorials/Tutorials";
import LessonsInside from "./components/lessonInside/LessonsInside";
import Fitness from "./components/fittness/Fitness";
import Choreography from "./components/choreography/Choreography";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/dance" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/lessonsInside/:id" element={<LessonsInside />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/choreography" element={<Choreography />} />
        </Routes>
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
