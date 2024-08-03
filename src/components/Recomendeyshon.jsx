import React from 'react'
import style from '../style/recomendation.module.css'
import halfCircle_img from '../recomendation_images/half_circle.png'
import RecomendationCircle from '../recomendation_components/RecomendationCircle'
import halfCircle2_img from '../recomendation_images/half_cirle2.png'

export default function Recomendeyshon() {
	return (
		
		<section className={style.recomendation_section}>

			<div className={style.recomendation_sectionImg_box}>

			   <img className={style.recomendation_section_halfCircle} src={halfCircle_img} alt="#" />

			</div>


			<div className={style.recomendation_sectionTitle_box}>5 главных выгод для вас!</div>


			<div className={style.recomendation_sectionBox}>

			   <div className={style.recomendation_sectionCircles_box}>
   
			   	<div className={style.recomendation_sectionCircles_boxLine}></div>
   
			   	  <RecomendationCircle number='01' />
			   	  <RecomendationCircle number='02' />
			   	  <RecomendationCircle number='03' />
			   	  <RecomendationCircle number='04' />
			   	  <RecomendationCircle number='05' />
   
			    </div>
   
			    <div className={style.recomendation_sectionText_box}>

			   	   <span className={style.recomendation_sectionText}>Всегда находим компромисс и учитываем ваши интересы</span>
			   	   <span className={style.recomendation_sectionText}>Собственное производство - не срываем сроки</span>
			   	   <span className={style.recomendation_sectionText}>Штатный парк техники для перевозки и погрузо- разгрузочных работ</span>
			   	   <span className={style.recomendation_sectionText}>Под ключ - от проектирования до сдачи объекта</span>
			   	   <span className={style.recomendation_sectionText}>Гарантия защиты средств от «Альфа-банка»</span>
			   </div>
   
			   
			</div>


			    <div className={style.recomendation_sectionImg_box2}>
   
                   <img className={style.recomendation_section_halfCircle2} src={halfCircle2_img} alt="#" />
    
                </div>
			


		</section>
	)
}
