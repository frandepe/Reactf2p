import { useState, useEffect } from "react";
import { instance } from "../../axios/axios";
import CardGames from "../../components/CardGames/CardGames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ColumnFilms.css";

const Slider2 = () => {
  const [sliderGame, setSliderGame] = useState([]);

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const callApi = async (categoria) => {
    try {
      const response = await instance.get(
        `/games?platform=${categoria}&sort-by=popularity`,
        {}
      );
      console.log(response.data);
      setSliderGame(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    callApi("browser");
  }, []);

  return (
    <div className="ColumnFilms__container">
      <h3>Top browser games</h3>
      <Slider {...settings}>
        {sliderGame.slice(0, 10).map((element) => {
          return (
            <div key={element.id}>
              <CardGames {...element} />
              <p>{element?.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider2;
