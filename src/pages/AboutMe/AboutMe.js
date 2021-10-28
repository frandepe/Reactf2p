import React from 'react'
import './AboutMe.css'
import myimage from './../../imgs/selfabout.jpg'
import eeuu from './../../imgs/eeuu.png'
import arg from './../../imgs/argentina.png'


const AboutMe = () => {
    
    
    return (
        <div className='about-contain'>
            <div className='about-grid'>
                <div className='about-img'>
                    <img src={myimage} alt='foto' />
                </div>
                <div className='about-flags'>
                    <div>
                        <div className='flag-flex'>
                            <h3>Sobre mí</h3>
                            <img src={arg} alt='foto' />
                        </div>
                        
                        <p>
                            Hola, mi nombre es Franco! <br/>
                            Este proyecto lo hice con el propósito de desarrollar mis habilidades en ReactJS para seguir creciendo como desarrollador web.
                        </p>
                    </div>
                    <div>
                        <div className='flag-flex'>
                            <h3>About me</h3>
                            <img src={eeuu} alt='foto' />
                        </div>
                        
                        <p>
                         Hi, my name is Franco! <br/>
                        I did this project with the purpose of developing my ReactJS skills to continue growing as a developer
                        </p> 
                    </div>
                    
                </div>
            </div>
            <div className='redes'>
                <table>
                    <tbody>
                        <tr>
                            <td><h3>Portfolio <span style={{color:'#373737'}}>{'>>'}</span></h3></td>
                            <td><a href='https://frandepaulo.netlify.app/'><i className="fas fa-user-graduate"></i></a></td>
                        </tr>
                        <tr>
                            <td><h3>GitHub <span style={{color:'#373737'}}>{'>>'}</span></h3></td>
                            <td><a href='https://github.com/frandepe'><i className="fab fa-github"></i></a></td>
                        </tr>
                        <tr>
                            <td><h3>LinkedIn <span style={{color:'#373737'}}>{'>>'}</span></h3></td>
                            <td><a href='https://www.linkedin.com/in/franco-de-paulo-13509b186/'><i className="fab fa-linkedin"></i></a></td>
                        </tr>
                        <tr style={{marginTop:'10px'}}>
                            <td><h3>Free-To-Play <span style={{color:'#373737'}}>(Thanks for the API)</span></h3></td>
                            <td><a href='https://www.freetogame.com/api-doc/?ref=devresourc.es'><i className="fas fa-dice"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default AboutMe
