import style from '../style/recomendation.module.css'

import red_circle_img from '../recomendation_images/cirle_red.png'


export default function RecommendationCircle({number}) {

    return (

        <div className={style.recommendation_circle}>

            <img className={style.recommendationCircle_red} src= {red_circle_img} alt="" />
            <span className={style.recommendation_circleNumber}>{number}</span>
            
        </div>
    )
    
}