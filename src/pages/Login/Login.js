import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

  
    return (
        <div className='cont-form'>
            <div className='flex-form'>
                <form>
                    <h2>Login</h2>

                        <div className='input-i-cont'>
                            <div>
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <input type='text' placeholder='Email' />
                            </div>
                        </div>

                        <div className='input-i-cont'>
                            <div>
                                <i class="fas fa-key"></i>
                            </div>
                            <div>
                                <input type='password' placeholder='Password' />
                            </div>
                        </div>

                <div className='btn-cont'>
                    <button className='btn-log'>Login</button>
                    <button className='btn-face'>Login with Facebook</button>
                </div>
                <div className='signup-cont'>
                    <p>Don't have an account yet?</p>
                    <Link to='./register'>Sign Up</Link>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login
