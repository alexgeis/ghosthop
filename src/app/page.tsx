import { Inter } from "@next/font/google";
import styles from "./home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
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
						HIRE US
					</Link>
				</div>
			</section>
		</main>
	);
}
