import React from "react";

import Button from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

import style from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <Button onClick={props.onShowCart}>Cart</Button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="Meals Banner" />
      </div>
    </>
  );
};

export default Header;
