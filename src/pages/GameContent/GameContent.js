import './GameContent.css'
import { instance } from '../../axios/axios'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

const GameContent = () => {

    // ESTO ES LO QUE TRAE CADA JUEGO

    // {
    //     "id": 452,
    //     "title": "Call Of Duty: Warzone",
    //     "thumbnail": "https://www.freetogame.com/g/452/thumbnail.jpg",
    //     "status": "Live",
    //     "short_description": "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
    //     "description": "Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.",
    //     "game_url": "https://www.freetogame.com/open/call-of-duty-warzone",
    //     "genre": "Shooter",
    //     "platform": "Windows",
    //     "publisher": "Activision",
    //     "developer": "Infinity Ward",
    //     "release_date": "2020-03-10",
    //     "freetogame_profile_url": "https://www.freetogame.com/call-of-duty-warzone",
    //     "minimum_system_requirements": {
    //         "os": "Windows 7 64-Bit (SP1) or Windows 10 64-Bit",
    //         "processor": "Intel Core i3-4340 or AMD FX-6300",
    //         "memory": "8GB RAM",
    //         "graphics": "NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950",
    //         "storage": "175GB HD space"
    //     },
    //     "screenshots": [
    //         {
    //             "id": 1124,
    //             "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg"
    //         },
    //         {
    //             "id": 1125,
    //             "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg"
    //         },
    //         {
    //             "id": 1126,
    //             "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg"
    //         },
    //         {
    //             "id": 1127,
    //             "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg"
    //         }
    //     ]
    // }

        
    
    const [gameCard, setGameCard] = useState('');

    const {id} = useParams()

        const callGames = async (id) => {

            try {
                const response = await instance.get(`/game?id=${id}`, {
                        })
                console.log(response.data.screenshots[0].image);
                setGameCard(response.data)
            } catch (error){
                alert(error)
            }
        }

        useEffect(() => {
            callGames(id)
        }, [])

    return (
        
        <div className='main-cont-game'>

            <div className='card-top'> 
                {gameCard.screenshots ? <img src={gameCard.screenshots[0].image} alt='foto'></img> : ''}
            </div>
            <div className='card-absolute'>
                <h1>{gameCard.title}</h1>
                <p>{gameCard.short_description}</p>
                <p style={{color: '#3a86ff', fontWeight:'bolder',textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>{gameCard.status}</p>
                <p>{gameCard.genre}</p>
                <h3>GRATUITO</h3>
                <div className='card-btn'>
                    {/* freetogame_profile_url */}
                    {/* <Link className='link-btn' to={gameCard.freetogame_profile_url}>Jugar</Link> */}
                    {gameCard.freetogame_profile_url ? <a href={gameCard.freetogame_profile_url}>Jugar</a> : <p style={{color: 'red', fontWeight:'bolder'}}>No disponible</p>}
                </div>
            </div>

            <footer className='footer-cont'>
                
                <div  className='footer-table'>
                    <div className='data-extra-footer'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><h3>Editora</h3></td>
                                    <td>{gameCard.publisher}</td>
                                </tr>
                                <tr>
                                    <td><h3>Desarrolladora</h3></td>
                                    <td>{gameCard.developer}</td>
                                </tr>
                                <tr>
                                    <td><h3>Fecha de lanzamiento</h3></td>
                                    <td>{gameCard.release_date}</td>
                                </tr>
                                <tr>
                                    <td><h3>Plataforma</h3></td>
                                    <td>{gameCard.platform}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h3 className='requisitos-h3'>Requisitos</h3>

                <div className='requisitos'>
                    {gameCard.minimum_system_requirements ? 
                   
                    <table> 
                        <tbody>
                            <tr>
                                <td><strong>Sistema Operativo</strong></td>
                                <td>{gameCard.minimum_system_requirements.os}</td>
                            </tr>
                            <tr>
                                <td><strong>Processor</strong></td>
                                <td>{gameCard.minimum_system_requirements.processor}</td>
                            </tr>
                            <tr>
                                <td><strong>Memory</strong></td>
                                <td>{gameCard.minimum_system_requirements.memory}</td>
                            </tr>
                            <tr>
                                <td><strong>Graphics</strong></td>
                                <td>{gameCard.minimum_system_requirements.graphics}</td>
                            </tr>
                            <tr>
                                <td><strong>Storage</strong></td>
                                <td>{gameCard.minimum_system_requirements.storage}</td>
                            </tr>
                        </tbody>
                    </table> 
                   
                    : ''}
                    
                </div>
                <div className='description'>
                    <p>{gameCard.description}</p>
                </div>
            
            </footer>
        </div>
    )
}

export default GameContent
