import './Register.css'
import 'firebase/auth'
import { useState } from 'react'
import {app} from './../../Firebase/FirebaseConfig'



const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isRegistrando, setIsRegistrando] = useState(false)
    const [errores, setErrores] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const crearUsuario = (email, password) => {
        app.auth().createUserWithEmailAndPassword(email, password).then((usuarioFirebase)=>{
            console.log('usuario creado', usuarioFirebase);
            props.setUsuario(usuarioFirebase)
        }).catch((error) => {
            setErrores('Failed to log in')
            alert(error)
        })
    }

    const iniciarSesion = (email, password) => {
        app.auth().signInWithEmailAndPassword(email, password).then((usuarioFirebase) => {
            console.log('sesion iniciada con:', usuarioFirebase.user);
            props.setUsuario(usuarioFirebase)
        }).catch((error) => {
            setErrores('Failed to create an account')
            alert(error)
        })
    }

    const submitHangle = (e) => {
        e.preventDefault();
        console.log(email, password);

        if (isRegistrando){
            crearUsuario(email, password)
        }

        if (!isRegistrando) {
            iniciarSesion(email, password)
        }
        
    }
  
    return (
        <div className='cont-form'>
            <div className='flex-form'>
                <form onSubmit={submitHangle}>
                    <h2>{isRegistrando ? 'Sign Up' : 'Login'}</h2>

                        <div className='input-i-cont'>
                            <div>
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <input value={email} onChange={handleEmail} id='emailField' type='text' placeholder='Email' />
                            </div>
                        </div>

                        <div className='input-i-cont'>
                            <div>
                                <i className="fas fa-key"></i>
                            </div>
                            <div>
                                <input value={password} onChange={handlePassword} id='passwordFielf' type='password' placeholder='Password' />
                            </div>
                        </div>

                        <p>{errores}</p>

                <div className='btn-cont'>
                    
                    <button type='submit' className='btn-log'>{isRegistrando ? 'Registrate' : 'Inicia sesion'}</button>

                    <div className='signup-cont'>
                        <p onClick={()=>setIsRegistrando(!isRegistrando)}>{isRegistrando ? 'Do you have an account yet? Login' : 'Do not have an account yet? Sign Up'}</p>
                    </div>

                    {/* <button type='button' onClick={()=>setIsRegistrando(!isRegistrando)} className='btn-face'>{isRegistrando ? 'Ya tienes cuenta?' : 'No tienes cuenta? inicia sesion'}</button> */}
                </div>
                
                </form>

            </div> 

        </div>
    )
}

export default Register

// import './Register.css'
// import { Link } from 'react-router-dom'
// import 'firebase/auth'
// import { useState } from 'react'
// import {app} from './../../Firebase/FirebaseConfig'



// const Register = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('')
//     const [cont, setCont] = useState(false)

//     // const firebase = useFirebaseApp();
    

//     const handleEmail = (e) => {
//         setEmail(e.target.value)
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value)
       
//     }

//     const submit = async (e) => {
//        e.preventDefault();
//        console.log(email, password);
//        try {
//         const resp = await app.auth().createUserWithEmailAndPassword(email,password);
//             setCont(resp)
        
//        } catch (error) {
//            alert(error)
//        }
       
//     }

//     const logout = async () => {
//       await app.auth().signOut();
//         // console.log(res);
//         // return res
//         // if (cont.user){
//         //     const resp = await !cont.user
//         //     console.log(resp);
//         //     setCont(resp)
//         //     return resp
//         // }
       
        
//      }

  
//     return (
//         <div className='cont-form'>
//             {!cont.user && <div className='flex-form'>
//                 <form>
//                     <h2>Register</h2>

//                         <div className='input-i-cont'>
//                             <div>
//                                 <i className="fas fa-user"></i>
//                             </div>
//                             <div>
//                                 <input onChange={handleEmail} type='text' placeholder='Email' />
//                             </div>
//                         </div>

//                         <div className='input-i-cont'>
//                             <div>
//                                 <i className="fas fa-key"></i>
//                             </div>
//                             <div>
//                                 <input onChange={handlePassword} type='password' placeholder='Password' />
//                             </div>
//                         </div>

//                 <div className='btn-cont'>
                    
//                     <button onClick={submit} type='button' className='btn-log'>Register</button>
//                     <button className='btn-face'>Register with Facebook</button>
//                 </div>
//                 <div className='signup-cont'>
//                     <p>Do you have an account yet?</p>
//                     <Link to='./login'>Login</Link>
//                 </div>
//                 </form>
//             </div> }

            

//                 {cont.user && <div className='welcome'>
//                     <h3>Hello, {cont.user.email}</h3>
//                     <p>Welcome to mi React project!</p>
//                     <Link to='./games'>{'<-'} Go to Home</Link>
//                     <div className='btn-desloguear'>
//                     <button onClick={logout}>Desloguearse</button>
//                     </div>
//                 </div>}
            
//         </div>
//     )
// }

// export default Register