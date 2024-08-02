import React from 'react'
import style from '../style/PopularProduct.module.css'
import { arrPopularProduct } from '../state/popularProduct.js'


export default function PopularProduct() {

	function mouseEnter(e) {

		e.currentTarget.classList.add(style.PopularProduct_hover)

	}

	function mouseLeave(e) {

		e.currentTarget.classList.remove(style.PopularProduct_hover)

	}

	return (
		<div className={style.PopularProduct_box}>

			<div className={style.PopularProduct_topBox}>

				<h1 className={style.PopularProduct_title}>Популярные товары</h1>

				<button className={style.PopularProduct_catalogButton}>Перейти в каталог</button>

			</div>

			<div className={style.PopularPoduct_gridBox}>

				{arrPopularProduct.map((product, index) => (

					<div key={index} className={style.PopularProduct_item} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

						<img src={product.img} alt="img_src" className={style.PopularProduct_itemImg} />

						<div className={style.PopularProduct_itemText}>

							<span className={style.PopularProduct_itemDate}>ГОСТ 14911-82</span>

							<span className={style.PopularProduct_itemTitle}>Опора тавровая хомутовая </span>

							<span className={style.PopularProduct_itemTx}>ТХ</span>

							<span className={style.PopularProduct_itemPrice}>849.9 руб. </span>

						</div>

					</div>

				))}

			</div>

		</div>
	)
}
