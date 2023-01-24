import styles from "./about.module.css";
import Image from "next/image";
import flawloPic from "../../assets/images/flawlo.jpeg";

export default function About() {
	return (
		<main className={styles.main}>
			<h1 className={styles.header}>We&apos;re a team of DJ professionals</h1>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
				pariatur? Tempora animi consequatur aliquid esse vero cupiditate veniam
				temporibus debitis quas laboriosam iste sunt vitae maiores doloribus
				provident, ab quis?
			</p>
			<section className={styles.team}>
				<div className={styles.card}>
					<span className={styles.cardImg}></span>
					<Image
						src={flawloPic}
						alt={`Benjamin Hopper a.k.a. flawlosphere`}
					/>
					<div className={styles.cardOverlay}></div>
					<div className={styles.cardContent}></div>
				</div>
			</section>
		</main>
	);
}
