import React from "react";
import styles from "../style/Main.module.css";
import img from "../components/img/image 6.jpg";
export default function Info() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h1 className={styles.title__h1}>
						Инженерно-производственный холдинг
					</h1>
				</div>
				<div className={styles.grid}>
					<div className={styles.block__content}>
						<div className={styles.one}>
							<div className={styles.number}>02</div>
							<div className={styles.hr}>
								<hr />
							</div>
							<div className={styles.textspan}>
								<span className={styles.span}>
									Производственные базы (Москва и Санкт-Петербург)
								</span>
							</div>
						</div>
						<div className={styles.one}>
							<div className={styles.number}>27</div>
							<div className={styles.hr}>
								<hr />
							</div>
							<div className={styles.textspan}>
								<span className={styles.span}>
									единиц профессионального оборудования
								</span>
							</div>
						</div>
						<div className={styles.one}>
							<div className={styles.number}>
								<span className={styles.numspace}>2</span>
								<span>800</span>
							</div>
							<div className={styles.hr}>
								<hr />
							</div>
							<div className={styles.textspan}>
								<span className={styles.span}>
									м2 производственных площадей
								</span>
							</div>
						</div>
						<div className={styles.one}>
							<div className={styles.number}>
								<span className={styles.numspace}>5</span>
								<span>000</span>
							</div>
							<div className={styles.hr}>
								<hr />
							</div>
							<div className={styles.textspan}>
								<span className={styles.span}>
									тонн выпускаемой продукции ежегодно
								</span>
							</div>
						</div>
					</div>
					<div className={styles.two}>
						<div className={styles.imgConteiner}>
							<img src={img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
