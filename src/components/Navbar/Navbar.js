import './Navbar.css';
import { useHistory } from "react-router"
import { app } from '../../Firebase/FirebaseConfig';


const Navbar = () => {

    const history = useHistory();

    const onLogin = () => {
        history.push('/register');
    }

    const aboutMe = () => {
        history.push('/aboutme');
    }

    const onPlay = () => {
        history.push('/games');
    }

    const cerrarSesion = () => {
        app.auth().signOut();
    }

    return (
        <div className='nav-cont'>
                <div>
                    <i onClick={onPlay} className="fas fa-gamepad"></i>
                </div>

                <div className='nav-contul'>
                    <ul className='nav-ul'>
                        <li><h3 onClick={onPlay}>Play</h3></li>
                        <li><h3 onClick={aboutMe}>About me</h3></li>
                        <li><h3 onClick={onLogin}>Login</h3></li>
                    </ul>
                </div>

                <button className='signoff' onClick={cerrarSesion}>Sign Out</button>
        </div>
    )
}


export default Navbar
