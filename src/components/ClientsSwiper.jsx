import React from 'react'
import style from '../style/clientSwiper.module.css'
import arrow_img from '../recomendation_images/arrow.png'
import {arrImages } from '../state/clientSwiper'


export default function ClientsSwiper() {
	return (

		<section className={style.clentSwiper_section}>

			<div className={style.clientsSwiper_section_block}>

				<div className={style.clientsSwiper_topDiv}>

					<span className={style.clientsSwiper_section_title}>Нам доверяют</span>

				    <div className={style.clentSwiper_sectionButtons_box}>

						<div className={style.clentSwiper_sectionButton}>
							<img className={style.clientsSwiper_section_buttonImg} src={arrow_img} alt="" />
						</div>
						<div className={style.clentSwiper_sectionButton}>
							<img className={style.clientsSwiper_section_buttonImg2}  src={arrow_img} alt="" />
						</div>
					
					</div>

				</div>

				<div className={style.clientsSwiper_section_bottomBox}>

					{arrImages.map((obj) =>

						<div key={obj.id} className={style.clientsSwiper_section_bottomDiv}>
							<img className={style.clientsSwiper_section_img} src={obj.img} alt="" />
						</div>

					)}

				</div>

			</div>

			


		</section>
	)
}
