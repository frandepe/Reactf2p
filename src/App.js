import Router from "./components/Router/Router";
import "./App.css";
import { app } from "./Firebase/FirebaseConfig";
import { useState, useEffect } from "react";
import Register from "../src/pages/Register/Register";

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("sesion iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <div className="App">
      {usuario ? <Router /> : <Register setUsuario={setUsuario} />}
    </div>
  );
}

export default App;
