// src/App.jsx
// Root app component — sets up React Router with all 5 pages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page imports (lazy-loaded for performance)
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      {/* Persistent Navbar across all pages */}
      <Navbar />

      {/* Page-level routes */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>

      {/* Persistent Footer across all pages */}
      <Footer />
    </BrowserRouter>
  )
}
