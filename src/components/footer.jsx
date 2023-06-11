import useNavbar from '../hooks/useNavbar';
import './style/footer.css'

const Footer = () => {

    const { navbarState } = useNavbar();

    return (
        <div className={"footer " + (navbarState ? 'opened-nav-margin' : 'w-full')}>
            <a href='https://www.linkedin.com/in/louise-amelie-mar%C3%A9chal-ba978298'><i className={"fa-brands fa-linkedin fa-xl"} style={{color: "var(--pink)"}}></i></a>
            <a href='https://github.com/louiseamarechal'><i className={"fa-brands fa-square-github fa-xl"} style={{color: "var(--pink)"}}></i></a>
        </div>
    )
}
export default Footer;