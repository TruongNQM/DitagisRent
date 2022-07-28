import "./app.scss";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./pages/search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/search" element={<Search />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
