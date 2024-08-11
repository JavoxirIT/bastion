import style from '../style/PopularProduct.module.css'
import { useState } from 'react'
import basketImg from '../images/popularProduct_images/basket.png'
import starImg from '../images/popularProduct_images/star.png'


export default function Product({img, title, price, date}) {

    const [showBlock, setShowBlock] = useState(false) 

    const [number, setNumber] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)


    function mouseEnter() {

		setShowBlock(true)

	}

	function mouseLeave() {

		setShowBlock(false)

	}


    const updateItemNumber = (num) => {

        const newNumber = number + num;

        if (newNumber >= 0) {

            setNumber(newNumber);
            setTotalPrice(newNumber * price);
        }
    };

    return (

        <div className={showBlock ? style.showBlock : style.PopularProduct_item} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

        <img src={img} alt="img_src" className={style.PopularProduct_itemImg} />

        <div className={showBlock ? style.item_favoriteDiv : style.item_favoriteDiv_hide}>

            <img className={style.item_favoriteImg} src={starImg} alt="img_src" />

            <span className={style.item_favoriteText}>В избранное</span>
        </div>

        <div className={style.PopularProduct_itemText}>

            <span className={style.PopularProduct_itemDate}>{date}</span>

            <span className={style.PopularProduct_itemTitle}>{title}</span>

            <span className={style.PopularProduct_itemTx}>ТХ</span>

            <span className={showBlock ? style.PopularProduct_itemPriceHide : style.PopularProduct_itemPrice}>{price} руб.</span>

        </div>

        <div className={showBlock ? style.Block_hover : style.Block_hoverHide}>

            <div className={style.price_quantityBlock}>

                <span className={style.PopularProduct_itemPrice2}>{totalPrice} руб.</span>
    
                <div className={style.quantityBlock}>
    
                    <button className={style.quantityBlock_buton} onClick={() => updateItemNumber(+1)}>+</button>
    
                    <div className={style.quantityBlock_number}><span className={style.product_number}>{number}</span></div>
    
                    <button className={style.quantityBlock_buton} onClick={() => updateItemNumber(-1)}>-</button>
    
                </div>


            </div>

            
            <button className={style.Block_hover_basketButton}>

                <div className={style.basketButton_div}>

                    <img className={style.basketButton_divImg} src={basketImg} alt="img_src" />

                    <span className={style.basketButton_divText}>В корзину</span>
                </div>

            </button>
            <button className={style.Block_hover_informationButton}>Подробнее</button>

        </div>

    </div>
    )
    
}