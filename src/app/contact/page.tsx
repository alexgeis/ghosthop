import styles from "./contact.module.css";
import { ContactForm } from "./ContactForm";

export default function Contact() {
	return (
		<main className={styles.main}>
			<ContactForm />
		</main>
	);
}
