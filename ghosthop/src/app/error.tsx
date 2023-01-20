import styles from "./error.module.css";

export default function Error() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>somethings fucked...</div>
		</main>
	);
}
