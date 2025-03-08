import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../components/images/arch_x_shopon.jpg";
import image2 from "../components/images/xbox_Gift_cards__2_.png";
import image3 from "../components/images/Untitled_design.png";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First Slide */}
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />

      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
