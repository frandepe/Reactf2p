// import './Register.css'
// import { Link } from 'react-router-dom'

// const Register = () => {

  
//     return (
//         <div className='cont-form'>
//             <div className='flex-form'>
//                 <form>
//                     <h2>Register</h2>

//                         <div className='input-i-cont'>
//                             <div>
//                                 <i class="fas fa-user"></i>
//                             </div>
//                             <div>
//                                 <input type='text' placeholder='Email' />
//                             </div>
//                         </div>

//                         <div className='input-i-cont'>
//                             <div>
//                                 <i class="fas fa-key"></i>
//                             </div>
//                             <div>
//                                 <input type='password' placeholder='Password' />
//                             </div>
//                         </div>

//                 <div className='btn-cont'>
//                     <button className='btn-log'>Register</button>
//                     <button className='btn-face'>Register with Facebook</button>
//                 </div>
//                 <div className='signup-cont'>
//                     <p>Do you have an account yet?</p>
//                     <Link to='./login'>Login</Link>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Register

import './Register.css'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import { useState } from 'react'
import {app} from './../../Firebase/FirebaseConfig'


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cont, setCont] = useState(false)

    // const firebase = useFirebaseApp();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
       
    }

    const submit = async (e) => {
       e.preventDefault();
       console.log(email, password);
       const resp = await app.auth().createUserWithEmailAndPassword(email,password)
       console.log(resp);
       setCont(resp)
    }

    const logout = async (e) => {
        e.preventDefault();
        await app.auth().signOut()
        
     }
  
    return (
        <div className='cont-form'>
            {!cont.user ? <div className='flex-form'>
                <form>
                    <h2>Register</h2>

                        <div className='input-i-cont'>
                            <div>
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <input id='emailInp' onChange={handleEmail} type='text' placeholder='Email' />
                            </div>
                        </div>

                        <div className='input-i-cont'>
                            <div>
                                <i className="fas fa-key"></i>
                            </div>
                            <div>
                                <input id='passwordInp' onChange={handlePassword} type='password' placeholder='Password' />
                            </div>
                        </div>

                <div className='btn-cont'>
                    <button onClick={submit} type='submit' className='btn-log'>Register</button>
                    <button className='btn-face'>Register with Facebook</button>
                </div>
                <div className='signup-cont'>
                    <p>Do you have an account yet?</p>
                    <Link to='./login'>Login</Link>
                </div>
                </form>
            </div> 

            :   

                <div className='welcome'>
                    <h3>Hello, {cont.user.email}</h3>
                    <p>Welcome to mi React project!</p>
                    <Link to='./games'>Go to Home</Link>
                    <button onClick={logout}>Desloguearse</button>
                </div>}
            
        </div>
    )
}

export default Register