import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Aboute from "./Pages/Aboute/Aboute";
import { Profile } from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
export default function App() {
  return (
    <Router basename="/Task-React">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Aboute />} />
          <Route path="portfolio" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
