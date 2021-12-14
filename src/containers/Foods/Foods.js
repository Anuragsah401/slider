import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import img1 from "../../assets/foodimg.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import Heading from "../../components/Heading/Heading";

const Foods = () => {
  const [index, setIndex] = useState(0);
  const [noOfSlide, setNoOfSlide] = useState(0);

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

  const beforeChange = (prev, next) => {
    setIndex(next);
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

  console.log(sliderRef.length);

  return (
    <div style={{ margin: "0 25px" }}>
      <Heading
        title="Popular near you"
        navigationNext={navigationNext}
        navigationPrevious={navigationPrevious}
        index={index}
      />
      <SwiperComp foods={foods} reference={sliderRef} beforeChange={beforeChange} />
    </div>
  );
};

export default Foods;
