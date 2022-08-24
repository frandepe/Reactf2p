import "./Register.css";
import "firebase/auth";
import { useState } from "react";
import { app } from "./../../Firebase/FirebaseConfig";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [errores, setErrores] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const crearUsuario = async (email, password) => {
    try {
      const usuarioFirebase = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      props.setUsuario(usuarioFirebase);
    } catch (error) {
      setErrores(error.message);
    }
  };

  const iniciarSesion = async (email, password) => {
    try {
      const usuarioFirebase = await app
        .auth()
        .signInWithEmailAndPassword(email, password);
      props.setUsuario(usuarioFirebase);
    } catch (error) {
      setErrores(error.message);
    }
  };

  const submitHangle = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (isRegistrando) {
      crearUsuario(email, password);
    }

    if (!isRegistrando) {
      iniciarSesion(email, password);
    }
  };

  return (
    <div className="cont-form">
      <div className="flex-form">
        <form onSubmit={submitHangle}>
          <h2>{isRegistrando ? "Sign Up" : "Login"}</h2>

          <div className="input-i-cont">
            <div>
              <i className="fas fa-user"></i>
            </div>
            <div>
              <input
                value={email}
                onChange={handleEmail}
                type="text"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="input-i-cont">
            <div>
              <i className="fas fa-key"></i>
            </div>
            <div>
              <input
                value={password}
                onChange={handlePassword}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="btn-cont">
            <div>
              <p className="errores-catch">{errores}</p>
            </div>

            <div>
              <button type="submit" className="btn-log">
                {isRegistrando ? "Sign Up" : "Login"}
              </button>
            </div>

            <div className="signup-cont">
              <p onClick={() => setIsRegistrando(!isRegistrando)}>
                {isRegistrando
                  ? "Do you have an account yet? Login"
                  : "Do not have an account yet? Sign Up"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
