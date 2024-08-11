import style from '../style/PopularProduct.module.css'
import { arrPopularProduct } from '../state/popularProduct.js'
import Product from '../popularProduct_components/Product.jsx'


export default function PopularProduct() {

	return (
		<div className={style.PopularProduct_box}>

			<div className={style.PopularProduct_topBox}>

				<h1 className={style.PopularProduct_title}>Популярные товары</h1>

				<button className={style.PopularProduct_catalogButton}>Перейти в каталог</button>

			</div>

			<div className={style.PopularPoduct_gridBox}>

			    {arrPopularProduct.map((product) => (
					
					<Product key={product.id} img = {product.img} title = {product.title} price = {product.price} date = {product.date}/>
    
				))}

			</div>

		</div>
	)
}
