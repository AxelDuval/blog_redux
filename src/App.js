import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/Containers/Home/Home";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
