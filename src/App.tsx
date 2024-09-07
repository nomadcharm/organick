import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/blog"} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
