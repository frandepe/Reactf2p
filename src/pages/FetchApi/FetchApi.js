import { useState, useEffect } from 'react'
import { instance } from '../../axios/axios'
import CardGames from '../../components/CardGames/CardGames'
// import ButtonCategory from '../ButtonCategory/ButtonCategory'
import './FetchApi.css'
import Loading from '../../components/Loading/Loading'






const FetchApi = () => {

    const [games, setGames] = useState([])
    const [elegir, setElegir] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(null)

    const callApi = async (categoria) => {

        try {
            const response = await instance.get(`/games?category=${categoria}&sort-by=popularity`, {
            }); 
            console.log(response.data);
            setGames(response.data)
            // setShow(!show)
            setLoading(true)
        } catch (error){
            alert(error)
        }
    }
    
    useEffect(() => {  
            callApi('action');
    }, [])

    const handleChange = (e) => {
        setElegir(callApi(e.target.value))
        console.log(e.target.value);
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
    }

    

    return (
        <div className='main-cont'>

            
            
            <div className='cont-select-input'>

                <div className='select-cont'>
                    <select value={elegir} onChange={handleChange}>
                    
                        <option hidden>Choose category</option>
                        <option value='action'>action</option>
                        <option value='action-rpg'>action-rpg</option>
                        <option value='anime'>anime</option>
                        <option value='battle-royale'>battle-royale</option>
                        <option value='card'>card</option>
                        <option value='fantasy'>fantasy</option>
                        <option value='fighting'>fighting</option>
                        <option value='first-person'>First-person</option>
                        <option value='flight'>flight</option>
                        <option value='horror'>horror</option>
                        <option value='low-spec'>low-spec</option>
                        <option value='martial-arts'>martial-arts</option>
                        <option value='military'>military</option>
                        <option value='mmo'>mmo</option>
                        <option value='mmorpg'>Mmorpg</option>
                        <option value='mmorts'>Mmorts</option>
                        <option value='permadeath'>permadeath</option>
                        <option value='pve'>Pve</option>
                        <option value='pvp'>Pvp</option>
                        <option value='shooter'>Shooter</option>
                        <option value='space'>space</option>
                        <option value='sports'>Sports</option>
                        <option value='strategy'>Strategy</option>
                        <option value='survival'>Survival</option>
                        <option value='tank'>tank</option>
                        <option value='third-Person'>third-Person</option>
                        <option value='tower-defense'>tower-defense</option>
                        <option value='zombie'>Zombie</option>
                        <option value='2d'>2d</option>
                        <option value='3d'>3d</option>
                       
                    </select>
                    
                </div>

                <div className="search-box">
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                    <input className='input-search' type='text' placeholder='Search...' onChange={handleInput}/>
                </div>

            </div>
            {loading ? <div className='img-display'>
                  {games.filter((element) => {
                        if (element.title.toLowerCase().includes(search.toLowerCase())){
                            return element;
                        }
                    }).map((element) => {
                            return (
                                <div key={element.id}>
                                  <CardGames {...element} />  
                                </div>
                                );
                    })}
                </div> : <Loading/>}
                
            
        </div>
    )
}

export default FetchApi
