import React from "react";
import css from "../style/Main.module.css"
export default function Main({ mainCatd }) {

	console.log(mainCatd[0].title);
	return (
		<div className={css.main} >
			<div className={css.mainBackgound} >
				<div className={css.mainContent} >
					<h1 className={css.mainTitle} >Производим металлические <br />
						изделия с <br />
						<span className={css.mainTitleSpan} >2010</span> года <br />

					</h1>
					<p className={css.mainMiniTitle} >Умеем договариваться на <br /> выгодных для вас условиях!
					</p>
					<div className={css.mainMiniText} >
						<span>Подробнее</span> <hr className={css.hr} />
					</div>
				</div>
			</div>
			<div style={{ marginTop: "-80px" }}>
				<div className={css.mainFooter} >
					{mainCatd.map((obj) =>
						<div key={obj.id} className={css.mainFooterCard} >
							<div className={css.cardImgBlock} >
								<img className={css.cardImg} src={obj.img} alt="" />
							</div>
							<h5 className={css.cardTitle} >{obj.title}</h5>
						</div>
					)}
				</div>
			</div>
		</div >
	);
}
