import styles from "./loading.module.css";

export default function Loading() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>It&apos;s loading, relax...</div>
		</main>
	);
}
