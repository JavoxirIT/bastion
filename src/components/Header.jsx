import React from "react";
import style from "../style/header.module.css";
import tel_img from "../header_images/image.png";
import location_img from "../header_images/location.png";
import email_img from "../header_images/email.png";

export default function Header() {
  return (
    <div className={style.headerBox}>
      <div className={style.headerTop}>
        <nav className={style.headerNav}>
          <span className={style.headerNav_text}>О нас</span>
          <span className={style.headerNav_text}>Производство</span>
          <span className={style.headerNav_text}>Выгоды для вас</span>
          <span className={style.headerNav_text}>Гарантии</span>
          <span className={style.headerNav_text}>Контакты</span>
        </nav>

        <nav className={style.headerNav2}>
          <div className={style.headerNav2_contactBox}>
            <img
              src={tel_img}
              alt=""
              className={style.headerNav2_contactBox_img}
            />
            <span className={style.headerNav2_contactBox_number}>
              +7 (499) 380-78-90
            </span>
          </div>

          <div className={style.headerNav2_region}>
            <img
              src={location_img}
              alt=""
              className={style.headerNav2_region_img}
            />
            <select className={style.headerNav2_region_select} name="" id="">
              {" "}
              <option value="">Москва</option>
            </select>
          </div>

          <div className={style.headerNav2_email}>
            <img
              src={email_img}
              alt=""
              className={style.headerNav2_email_img}
            />
            <span className={style.headerNav2_email_text}>
              info@bastion.pro
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
