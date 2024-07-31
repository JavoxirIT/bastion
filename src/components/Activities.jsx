import React from "react";
import images1 from "../images/Activities1.png";
import images2 from "../images/Activities2.png";
import images3 from "../images/Activities3.png";
import styles from "../style/Activities.module.css";

export default function Activities() {
  return (
    <div className={styles.ActivitiesBlock}>
      <h1 className={styles.ActivitiesTitle}>Направления деятельности</h1>
      <div className={styles.BlockContent}>
        <div className={styles.ActivitiesContent}>
          <div className={styles.Content}>
            <div className={styles.ContentImg1}>
              <img className={styles.Img1} src={images1} alt="" />
            </div>
            <p className={styles.ContentTitle1}>Металлические изделия</p>
            <p className={styles.ContentText}>
              Пример названия подпункта <br />
              <br /> Приммер <br />
              <br />
              Пример названия <br /> <br /> Подкатегория пример
            </p>
            <div className={styles.ContentElement}>
              <div className={styles.ContentAbsolut}></div>
              <p className={styles.ElementText}>Подробнее</p>
              <hr className={styles.Elementhr} />
            </div>
          </div>
        </div>
        <div className={styles.ActivitiesContent}>
          <div className={styles.Content}>
            <div className={styles.ContentImg2}>
              <img className={styles.Img2} src={images2} alt="" />
            </div>
            <p className={styles.ContentTitle2}>Противопожарное оборудование</p>
            <p className={styles.ContentText}>
              Пример названия подпункта <br /> <br /> Приммер <br />
              <br />
              Пример названия <br /> <br /> Подкатегория пример
            </p>
            <div className={styles.ContentElement}>
              <div className={styles.ContentAbsolut}></div>
              <p className={styles.ElementText}>Подробнее</p>
              <hr className={styles.Elementhr} />
            </div>
          </div>
        </div>
        <div className={styles.ActivitiesContent}>
          <div className={styles.Content}>
            <div className={styles.ContentImg3}>
              <img className={styles.Img3} src={images3} alt="" />
            </div>
            <p className={styles.ContentTitle3}>
              Проектирование металлоконструкций
            </p>
            <p className={styles.ContentText}>
              Пример названия подпункта <br /> <br /> Приммер <br />
              <br />
              Пример названия <br />
              <br /> Подкатегория пример
            </p>
            <div className={styles.ContentElement}>
              <div className={styles.ContentAbsolut}></div>
              <p className={styles.ElementText}>Подробнее</p>
              <hr className={styles.Elementhr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
