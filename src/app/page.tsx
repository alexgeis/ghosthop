import { Inter } from "@next/font/google";
import styles from "./home.module.css";
import Hero from "./(home)/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<section>FURTHER DESCRIPTION</section>
			<section>PHOTO CAROUSAL / DISPLAY</section>
			<section>CTA - CONTACT PAGE</section>
		</main>
	);
}
