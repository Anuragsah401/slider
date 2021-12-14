import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

import classes from "./FoodCard.module.css";

const FoodCard = (props) => {
  return (
    <div key={`food ${props.index}`} className={classes.cardContainer}>
      <div className={classes.foodImg}>
        <img src={props.food.foodImg} alt="" />
      </div>
      <div className={classes.detail}>
        <div className={classes.foodTitleAndRating}>
          <h3>{props.food.foodTitle}</h3>
          <div>{props.food.foodRating}</div>
        </div>

        <div className={classes.foodPriceAndTime}>
          <div>
            <FontAwesomeIcon icon={faTicketAlt} color="green" />
          </div>
          <div className={classes.foodPrice}>
            <p>{props.food.price} Delivery Fee^</p>
          </div>
          <div className={classes.foodTime}>{props.food.time}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
