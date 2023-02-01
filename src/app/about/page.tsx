import styles from "./about.module.css";
import Image from "next/image";
import flawloPic from "../../assets/images/flawlo.jpeg";
import { Card } from "types/types";

export default function About() {
	const cardData: Card[] = [
		{ imgSrc: flawloPic, name: "Benjamin", position: "Co-founder / DJ", id: 1 },
		{
			imgSrc: "http://placekitten.com/180/120",
			name: "Jazzy Jeff",
			position: "DJ",
			id: 3,
		},
		{
			imgSrc: "http://placekitten.com/180/121",
			name: "Carl Cox",
			position: "DJ",
			id: 4,
		},
		{
			imgSrc: "http://placekitten.com/181/120",
			name: "deadmau5",
			position: "DJ",
			id: 5,
		},
		{
			imgSrc: "http://placekitten.com/181/121",
			name: "Rezz",
			position: "DJ",
			id: 6,
		},
		{
			imgSrc: "http://placekitten.com/182/122",
			name: "Malibu",
			position: "DJ",
			id: 7,
		},
		{
			imgSrc: "http://placekitten.com/182/120",
			name: "A-Trak",
			position: "DJ",
			id: 8,
		},
		{
			imgSrc: "http://placekitten.com/180/122",
			name: "Tiesto",
			position: "DJ",
			id: 9,
		},
		{
			imgSrc: "http://placekitten.com/183/123",
			name: "Arca",
			position: "DJ",
			id: 10,
		},
	];

	return (
		<main className={styles.main}>
			<section className={styles.headWrap}>
				<h1 className={styles.header}>We&apos;re a team of DJ professionals</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
					pariatur? Tempora animi consequatur aliquid esse vero cupiditate
					veniam temporibus debitis quas laboriosam iste sunt vitae maiores
					doloribus provident, ab quis?
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
