import styles from "./about.module.css";
import Image from "next/image";
import { cardData } from "./employeeData";

export default function About() {
	return (
		<main className={styles.main}>
			<section className={styles.headWrap}>
				<h1 className={styles.header}>We&apos;re a team of DJ professionals</h1>
				<p className={styles.description}>
					Hire one of our experienced entertainers
				</p>
			</section>
			<section className={styles.team}>
				{cardData.map((card) => {
					return (
						<div
							className={styles.card}
							key={card.id}
						>
							<span className={styles.cardImg}>
								<Image
									src={card.imgSrc}
									alt={card.name}
									width={200}
									height={140}
								/>
							</span>
							<div className={styles.cardOverlay}></div>
							<div className={styles.cardContent}>
								<p className={styles.cardContentHead}>{card.name}</p>
								<p className={styles.cardContentPos}>{card.position}</p>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}
