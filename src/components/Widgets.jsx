import React from "react";

import logo_img from "../header_images/logo.png";
import menu_img from "../header_images/menu.png";
import searcher_img from "../header_images/searcher.png";
import star_img from "../header_images/star.png";
import basket_img from "../header_images/basket.png";
import style from "../style/header.module.css";

export default function Widgets() {
  return (
    <>
      <div className={style.headerBottom}>
        <div className={style.headerBottom_box}>
          <img className={style.headerBottom_boxLogo} src={logo_img} alt="#" />

          <div className={style.headerBottom_boxTextDiv}>
            <span className={style.headerBottom_boxText}>Федеральный</span>
            <span className={style.headerBottom_boxText}>производитель</span>
            <span className={style.headerBottom_boxText}>металлоизделий</span>
          </div>

          <button className={style.headerBottom_boxButton}>
            <img
              className={style.headerBottom_boxButton_img}
              src={menu_img}
              alt=""
            />

            <span className={style.headerBottom_boxButton_text}>Каталог</span>
          </button>

          <div className={style.headerBottom_boxSearcher}>
            <div className={style.headerBottom_boxSearcher_b}>
              <img
                className={style.headerBottom_boxSearcher_img}
                src={searcher_img}
                alt=""
              />
            </div>

            <input
              className={style.headerBottom_boxInput}
              type="text"
              placeholder="Поиск по названию..."
            />
          </div>

          <button className={style.headerBottom_boxCall_button}>
            Заказать звонок
          </button>

          <div className={style.headerBottom_boxFavorites_div}>
            <img
              className={style.headerBottom_boxFavorites_img}
              src={star_img}
              alt=""
            />

            <span className={style.headerBottom_boxFavorites_text}>
              Избранное
            </span>
          </div>

          <div className={style.headerBottom_boxBasket_div}>
            <img
              className={style.headerBottom_boxBasket_img}
              src={basket_img}
              alt=""
            />

            <span className={style.headerBottom_boxbasket_text}>Корзина</span>
          </div>
        </div>
      </div>
    </>
  );
}
