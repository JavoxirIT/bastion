import React from 'react'
import style from '../style/header.module.css'
import tel_img from '../header_images/image.png'
import location_img from '../header_images/location.png'
import email_img from '../header_images/email.png'
import logo_img from '../header_images/logo.png'
import menu_img from '../header_images/menu.png'
import searcher_img from '../header_images/searcher.png'
import star_img from '../header_images/star.png'
import basket_img from '../header_images/basket.png'

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

						<img src={tel_img} alt="" className={style.headerNav2_contactBox_img} />
						<span className={style.headerNav2_contactBox_number}>+7 (499) 380-78-90</span>

					</div>

					<div className={style.headerNav2_region}>

						<img src={location_img} alt=""  className={style.headerNav2_region_img}/>
						<select className={style.headerNav2_region_select} name="" id=""> <option value="">Москва</option></select>
					</div>

					<div className={style.headerNav2_email}>

					    <img src={email_img} alt=""  className={style.headerNav2_email_img}/>
					    <span className={style.headerNav2_email_text}>info@bastion.pro</span>

					</div>

				</nav>

			</div>

			<div className={style.headerBottom}>

				<div className={style.headerBottom_box}>

					<img className={style.headerBottom_boxLogo} src={logo_img} alt="#" />

					<div className={style.headerBottom_boxTextDiv}>

						<span className={style.headerBottom_boxText}>Федеральный</span>
						<span className={style.headerBottom_boxText}>производитель</span>
						<span className={style.headerBottom_boxText}>металлоизделий</span>

					</div>

					<button className={style.headerBottom_boxButton}>

						<img className={style.headerBottom_boxButton_img} src={menu_img} alt="" />

						<span className={style.headerBottom_boxButton_text}>Каталог</span>

					</button>

					<div className={style.headerBottom_boxSearcher}>

						<div className={style.headerBottom_boxSearcher_b}>

							<img className={style.headerBottom_boxSearcher_img} src={searcher_img} alt="" />

						</div>

						<input className={style.headerBottom_boxInput} type="text" placeholder='Поиск по названию...'/>

					</div>

					<button className={style.headerBottom_boxCall_button}>Заказать звонок</button>

					<div className={style.headerBottom_boxFavorites_div}>

						<img className={style.headerBottom_boxFavorites_img} src={star_img} alt="" />

						<span className={style.headerBottom_boxFavorites_text}>Избранное</span>

					</div>


					<div className={style.headerBottom_boxBasket_div}>

						<img className={style.headerBottom_boxBasket_img} src={basket_img} alt="" />

						<span className={style.headerBottom_boxbasket_text}>Корзина</span>



					</div>

				</div>

			</div>

		</div>
	)
}
