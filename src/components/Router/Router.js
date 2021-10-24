import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import AboutMe from "../../pages/AboutMe/AboutMe"
import FetchApi from "../../pages/FetchApi/FetchApi"
import GameContent from "../../pages/GameContent/GameContent"
import Login from "../../pages/Login/Login"
import Register from "../../pages/Register/Register"
import Navbar from "../Navbar/Navbar"


const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact={true} path='/games'component={FetchApi}/>
                    <Route exact={true} path='/aboutme'component={AboutMe}/>
                    <Route exact={true} path='/login'component={Login}/>
                    <Route exact={true} path='/register'component={Register}/>
                    <Route exact={true} path='/game/:id' component={GameContent} />
                    <Route exact={true} path='/nav' component={Navbar} />
                    <Redirect to='/games'/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
