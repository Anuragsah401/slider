import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import img1 from "../../assets/foodimg.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import Heading from "../../components/Heading/Heading";
import { useIsMobile, useMidDevice, useIsTablet } from "../../Hooks/useMediaQuery";

const Foods = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMid = useMidDevice();
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderRef = useRef();

  useEffect(() => {
    axios.get("https://api.rarafoods.com.au/api/restaurant-package/").then((res) => {
      console.log(res);
    });
  }, []);

  const navigationNext = () => {
    sliderRef.current.slickNext();
  };

  const navigationPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const foods = [
    {
      foodId: 1,
      foodImg: img2,
      foodTitle: "Mr Q's Restaurant",
      foodLink: "#",
      foodRating: 4.7,
      price: "Rs. 300",
      time: "30-40 min",
    },
    {
      foodId: 2,
      foodImg: img3,
      foodTitle: "Mr Q's Restaurant",
      foodLink: "#",
      foodRating: 4.7,
      price: "Rs. 300",
      time: "30-40 min",
    },
    {
      foodId: 3,
      foodImg: img4,
      foodTitle: "Mr Q's Restaurant",
      foodLink: "#",
      foodRating: 4.7,
      price: "Rs. 300",
      time: "30-40 min",
    },
    {
      foodId: 4,
      foodImg: img1,
      foodTitle: "Mr Q's Restaurant",
      foodLink: "#",
      foodRating: 4.7,
      price: "Rs. 300",
      time: "30-40 min",
    },
    {
      foodId: 5,
      foodImg: img1,
      foodTitle: "Mr Q's Restaurant",
      foodLink: "#",
      foodRating: 4.7,
      price: "Rs. 300",
      time: "30-40 min",
    },
  ];

  const getSliderLength = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isMid) return 3;
    return 4;
  };

  const isNextBtnDisabled = foods.length - getSliderLength() === activeSlide;

  return (
    <div style={{ margin: "0 25px" }}>
      <Heading
        title="Popular near you"
        navigationNext={navigationNext}
        navigationPrevious={navigationPrevious}
        disablePrevButton={activeSlide === 0}
        disableNextButton={isNextBtnDisabled}
      />
      <SwiperComp
        foods={foods}
        reference={sliderRef}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};

export default Foods;
