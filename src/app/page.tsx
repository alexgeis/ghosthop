import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import djControllerVideo from "../assets/videos/dj-controller.mp4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			{/* <div>GHOSTHOP</div> */}
			<section className={styles.heroSlider}>
				<video src={`/dj-controller.mp4`}></video>
			</section>
		</main>
	);
}
