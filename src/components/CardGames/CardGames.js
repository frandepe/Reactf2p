import './CardGames.css'
import { useHistory } from "react-router"

const CardGames = ({thumbnail, id}) => {

    const history = useHistory();

    const handleImg = () => {
        history.push(`/game/${id}`);
    }


    return (
        <div className='img-card'>
            <img onClick={handleImg} src={thumbnail} alt="foto"></img>    
        </div>
    )
}

export default CardGames
