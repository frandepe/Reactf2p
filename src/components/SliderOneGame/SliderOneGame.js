import { useState, useEffect } from "react";
import { instance } from "../../axios/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderOneGame.css";

const SliderOneGame = () => {
  const [sliderGame, setSliderGame] = useState([]);

  const randomGame = Math.floor(Math.random() * (450 - 0 + 1) + 0);
  console.log(randomGame);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const callApi = async (id) => {
    try {
      const response = await instance.get(`/game?id=${id}`, {});
      console.log(response.data);
      setSliderGame(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    return callApi("220");
  }, []);

  return (
    <div className="SliderOneGame__container">
      <Slider {...settings}>
        {sliderGame?.screenshots?.map((element, i) => {
          return (
            <div key={i} className="SliderOneGame__images">
              <img src={element?.image} alt="Img not found" />
            </div>
          );
        })}
      </Slider>
      <h4>{sliderGame?.title}</h4>
      <p>{sliderGame?.short_description}</p>
    </div>
  );
};

export default SliderOneGame;
