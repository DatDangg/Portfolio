import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Project from "./pages/Project"
import ScrollToTop from "./components/layout/ScrollToTop"

import {Routes, Route, Link} from "react-router-dom"

function App () {
    return (
      <>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </>
    )
}
export default App