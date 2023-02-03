import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
	return (
		<section className={styles.heroWrapper}>
			<div className={styles.heroOverlay}></div>
			<video
				autoPlay
				loop
				muted
				playsInline
			>
				<source
					src={`/dj-controller.mp4`}
					type="video/mp4"
				/>
			</video>
			<div className={styles.heroContent}>
				<h1>GHOSTHOP</h1>
				<p>DJ WONDERS</p>
				<Link
					href="/contact"
					className={styles.heroBtn}
				>
					HIRE NOW
				</Link>
			</div>
		</section>
	);
}
