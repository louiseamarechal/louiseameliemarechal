import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import CV from './pages/CV.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './components/style/colors.css'

const App = () => {
  
  return (
    <>
       <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  )
}

export default App