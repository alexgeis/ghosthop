"use client"; // Error components must be Client components
import styles from "./error.module.css";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className={styles.main}>
			<h2>Something went wrong!</h2>
			<p className={styles.description}>Error: {error.message}</p>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Retry
			</button>
		</div>
	);
}
