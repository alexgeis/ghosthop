import styles from "./loading.module.css";
import Image from "next/image";
import loadingIcon from "../assets/icons/loading.png";

export default function Loading() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>LOADING...</div>
			<Image
				src={loadingIcon}
				alt="loading icon"
				className={styles.spinner}
				width={90}
				height={90}
				priority
			></Image>
			<div className={styles.description}>
				Try a page refresh if it&apos;s taking too long
			</div>
		</main>
	);
}
