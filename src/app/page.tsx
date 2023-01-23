import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import djControllerVideo from "../assets/videos/dj-controller.mp4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.heroWrapper}>
				<div className={styles.overlay}></div>
				<video
					// src={`/dj-controller.mp4`}
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
				<div className={styles.content}>
					<h1>GHOSTHOP</h1>
					<p>DJ WONDERS</p>
				</div>
			</section>
		</main>
	);
}
