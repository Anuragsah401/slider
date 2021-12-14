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
          <SlideButton direction="prev" prev={props.navigationPrevious} index={props.index} />
          <SlideButton direction="next" next={props.navigationNext} index={props.index} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
