import styles from "./loading.module.css";
import Image from "next/image";
import loadingIcon from "../assets/icons/loading.png";

export default function Loading() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>It&apos;s loading, relax...</div>
			<Image
				src={loadingIcon}
				alt="loading icon"
				className={styles.spinner}
				width={90}
				height={90}
				priority
			></Image>
		</main>
	);
}
