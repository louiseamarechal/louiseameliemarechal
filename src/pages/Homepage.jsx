import '../App.css'
import './style/Homepage.css'
import '../components/style/buttons.css'
import { Link } from 'react-router-dom'

const Homepage = () => {

    return (
        <div id='homepage'>
            <div className='title'>
                <h1>Louise-Amélie Maréchal</h1>
            </div>
            <div className='menu'>
                <Link to="/cv" className='see-through-button'>Curriculum Vitae</Link>
                <Link to="/projets" className='see-through-button m-5'>Projets</Link>
                <Link to="/contact" className='see-through-button'>Contact</Link>
            </div>
        </div>
    )
}

export default Homepage;
