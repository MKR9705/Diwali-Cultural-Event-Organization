import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from './Layout';
import DiwaliStories from "./DiwaliStories";
import PhotoGallery from "./PhotoGallery";
import GetData from "./GetData";
import Register from "./Register";
import Update from "./Update";
import Delete from "./Delete";



export default function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="DiwaliStories" element={<DiwaliStories />} />
          <Route path="PhotoGallery" element={<PhotoGallery />} />
          <Route path="GetData" element={<GetData />} />
          <Route path="Register" element={<Register />} />
          <Route path="Update" element={<Update />} />
          <Route path="Delete" element={<Delete />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
