import React from "react";
import classes from "./control.module.scss";
import images from "../../assets/images";

export default function () {
  return (
    <a>
      <div className={classes.container__box}>
        <div className={classes.content__container}>
          <div>
            <img className={classes.image__container} src={images.temp} />
          </div>
          <div>
            <h4>Nhiet do</h4>
            <h3>22*C</h3>
          </div>
        </div>
        <div className={classes.update__content}>UPDATE 40$</div>
      </div>
    </a>
  );
}
