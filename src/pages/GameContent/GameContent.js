import "./GameContent.css";
import { instance } from "../../axios/axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const GameContent = () => {
  const [gameCard, setGameCard] = useState("");

  const { id } = useParams();

  const callGames = async (id) => {
    try {
      const response = await instance.get(`/game?id=${id}`, {});
      console.log(response.data.screenshots[0].image);
      console.log(response.data);
      setGameCard(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    callGames(id);
  }, []);

  return (
    <div className="main-cont-game">
      <div className="card-top">
        {gameCard.screenshots ? (
          <img src={gameCard?.screenshots[0]?.image} alt="Img not found" />
        ) : (
          ""
        )}
      </div>

      <footer className="footer-cont">
        <div className="card-absolute">
          <h1>{gameCard?.title}</h1>
          <p>{gameCard?.short_description}</p>
          <p
            style={{
              color: "#3a86ff",
              fontWeight: "bolder",
              textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            {gameCard?.status}
          </p>
          <p>{gameCard?.genre}</p>
          <h3>FREE</h3>
          <div className="card-btn">
            {gameCard?.freetogame_profile_url ? (
              <a href={gameCard?.freetogame_profile_url}>Play</a>
            ) : (
              <p style={{ color: "red", fontWeight: "bolder" }}>
                Game not available
              </p>
            )}
          </div>
        </div>

        <div className="footer-table">
          <div className="data-extra-footer">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3>Publisher</h3>
                  </td>
                  <td>{gameCard?.publisher}</td>
                </tr>
                <tr>
                  <td>
                    <h3>Developer</h3>
                  </td>
                  <td>{gameCard?.developer}</td>
                </tr>
                <tr>
                  <td>
                    <h3>Release date</h3>
                  </td>
                  <td>{gameCard?.release_date}</td>
                </tr>
                <tr>
                  <td>
                    <h3>Platform</h3>
                  </td>
                  <td>{gameCard?.platform}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="requisitos-h3">Requirements</h3>

        <div className="requisitos">
          {gameCard?.minimum_system_requirements ? (
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>OS</strong>
                  </td>
                  <td>{gameCard?.minimum_system_requirements.os}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Processor</strong>
                  </td>
                  <td>{gameCard?.minimum_system_requirements.processor}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Memory</strong>
                  </td>
                  <td>{gameCard?.minimum_system_requirements.memory}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Graphics</strong>
                  </td>
                  <td>{gameCard?.minimum_system_requirements.graphics}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Storage</strong>
                  </td>
                  <td>{gameCard?.minimum_system_requirements.storage}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
        <div className="description">
          <p>{gameCard?.description}</p>
        </div>
      </footer>
    </div>
  );
};

export default GameContent;
