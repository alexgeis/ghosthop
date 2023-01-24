import styles from "./contact.module.css";
import { ContactForm } from "./ContactForm";

export default function Contact() {
	return (
		<main className={styles.main}>
			<ContactForm />
			{/* <div className={styles.description}>
				Hold tight I&apos;m working on it, jesus...
			</div> */}
		</main>
	);
}
