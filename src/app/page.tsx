import { Inter } from "@next/font/google";
import styles from "./home.module.css";
import Hero from "./(components)/(hero)/Hero";
import Link from "next/link";
import Carousel from "./(components)/(carousel)/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<section className={`${styles.homeSection} ${styles.homeInfo}`}>
				<h2>Make your next DJ hire simple</h2>
				<p>
					Our professional team will bring music, amplifiers, and the right
					atmosphere to your next event
				</p>
			</section>
			{/* <section className={`${styles.homeSection} ${styles.testimonial}`}>
				<h2>TESTIMONIAL SECTION</h2>
				<p>Clients have a lot to say about Ghosthop</p>
			</section> */}

			{/* <section className={`${styles.homeSection} ${styles.gallery}`}>
				<h2>PHOTOS</h2>
				<Carousel />
			</section> */}
			<section className={`${styles.homeSection} ${styles.callToAction}`}>
				<h2>Contact us today</h2>
				<Link
					href="/contact"
					className={styles.ctaBtn}
				>
					HIRE NOW
				</Link>
			</section>
		</main>
	);
}
