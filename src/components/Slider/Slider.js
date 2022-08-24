import { useState, useEffect } from "react";
import { instance } from "../../axios/axios";
import CardGames from "../../components/CardGames/CardGames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider2 = () => {
  const [sliderGame, setSliderGame] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    callApi("pc");
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {sliderGame.slice(0, 10).map((element) => {
          return (
            <div key={element.id}>
              <CardGames {...element} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider2;
