import './Navbar.css';
import { useHistory } from "react-router"


const Navbar = () => {

    const history = useHistory();

    const onLogin = () => {
        history.push('/login');
    }

    const aboutMe = () => {
        history.push('/aboutme');
    }

    const onPlay = () => {
        history.push('/games');
    }

    return (
        <div className='nav-cont'>
                <div>
                    <i className="fas fa-gamepad"></i>
                </div>

                <div className='nav-contul'>
                    <ul className='nav-ul'>
                        <li><h3 onClick={onPlay}>Play</h3></li>
                        <li><h3 onClick={onLogin}>Login</h3></li>
                        <li><h3 onClick={aboutMe}>About me</h3></li>
                    </ul>
                </div>
        </div>
    )
}


export default Navbar
