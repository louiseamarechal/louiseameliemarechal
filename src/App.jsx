import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import CV from './pages/CV.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './components/style/colors.css'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  
  return (
    <div className='app'>
      <Navbar/>
      <div className='main-content'>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App