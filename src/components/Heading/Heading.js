import React from "react";
import SlideButton from "./SlideButton/SlideButton";

import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>

      <div className={classes.controller}>
        <div>
          <a href=".">See all</a>
        </div>

        <div className={classes.slideBtn}>
          <SlideButton
            direction="prev"
            prev={props.navigationPrevious}
            disabled={props.disablePrevButton}
          />
          <SlideButton
            direction="next"
            next={props.navigationNext}
            disabled={props.disableNextButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
