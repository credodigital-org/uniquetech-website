import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicLayout from './Layouts/PublicLayout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './styles.css';
function App() { return <BrowserRouter><PublicLayout><Routes>
<Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} /><Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} />
</Routes></PublicLayout></BrowserRouter>; }
export default App;
