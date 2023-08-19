import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Introduction";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Projects";

import HashLoader from "react-spinners/HashLoader";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={"#9067C6"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
