"use client";
import { useEffect } from "react";
import styles from "./contact.module.css";
import { ContactForm } from "./ContactForm";

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className={styles.main}>
			<ContactForm />
		</main>
	);
}
