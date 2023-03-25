import classes from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faArrowRightFromBracket,
  faUser,
  faHome,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

//import { Link } from "react-router-dom";

export default function () {
  const obj = [
    {
      heading: "HOME",
      link: "/dashboard",
      icon: faHome,
    },
    {
      heading: "CONTROLL",
      link: "/upload",
      icon: faMobile,
    },
    {
      heading: "CUSTOMER",
      link: "/users",
      icon: faUser,
    },
  ];

  return (
    <div className={classes["navbar"]}>
      <div className={classes["navbar__avt"]}>
        <div>
          <img
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/161740475_1098721937275364_3141439153872729811_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8kVU5tmbsEgAX-rfVu4&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfASvejCfo-QCHPqVvQaxOaEtpOT8PqKDntwieMjHJjtRg&oe=6445F026"
            alt="Ảnh nền"
            className={classes["background"]}
          ></img>
        </div>
      </div>

      <ul className={classes["navbar__list"]}>
        {obj.map((item, idx) => (
          <li
            key={idx}
            className={`${classes["navbar__item"]} 
                     ${classes["navbar__item--actived"]}`}
          >
            <div to={item.link} className={classes["navbar__item-link"]}>
              <FontAwesomeIcon
                className={classes["navbar__item-icon"]}
                icon={item.icon}
              />
              {item.heading}
            </div>
          </li>
        ))}
        <li>
          <div className={classes["navbar__item"]}>
            <FontAwesomeIcon
              className={classes["navbar__item-icon"]}
              icon={faArrowRightFromBracket}
            />
            LOG OUT
          </div>
        </li>
      </ul>
    </div>
  );
}
