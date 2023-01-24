import styles from "./contact.module.css";
import { ContactForm } from "./ContactForm";
import { ContactFormTemplate } from "./ContactFormTemplate";

export default function Contact() {
	return (
		<main className={styles.main}>
			<ContactFormTemplate>
				<ContactForm />
			</ContactFormTemplate>
			{/* <div className={styles.description}>
				Hold tight I&apos;m working on it, jesus...
			</div> */}
		</main>
	);
}
