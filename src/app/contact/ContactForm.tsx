"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./ContactForm.module.css";
import { clean } from "./cleanPhone";

type ContactFormProps = {
	// onClick?: React.MouseEventHandler;
};

type formState = {
	name: string;
	email: string;
	phone: string;
	eventType: string;
	eventDate: Date;

	msg: string;
};

export const ContactForm = ({}: ContactFormProps): JSX.Element => {
	const formRef = useRef<HTMLFormElement>(null);

	const INITIAL_STATE = {
		name: "",
		email: "",
		msg: "",
	};
	const [form, setForm] = useState(INITIAL_STATE);

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		// // test
		// alert(
		// 	`${form.name}(email: ${form.email}) writes the following: ${form.msg}`
		// );
		// validation
		if (!form.name || !form.email || !form.msg) {
			alert("Please ensure all required fields contain content!");
			return;
		}
		// send to email via EmailJS
		emailjs
			.sendForm(
				"service_rhzu6kh",
				"template_zfyylxo",
				formRef.current!,
				"ZD7n5BJBesxO0h3x4"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.error(error.text);
				}
			);

		setForm(INITIAL_STATE);
	};

	const [startDate, setStartDate] = useState<Date | null>(new Date());

	return (
		<div>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
			>
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="Your name"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<input
					className={styles.contactFormInput}
					type="email"
					placeholder="Your e-mail"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<textarea
					className={styles.contactFormTextArea}
					id="contactFormTextArea"
					placeholder="Write your message"
					name="msg"
					value={form.msg}
					onChange={handleChange}
				></textarea>
				<DatePicker
					selected={startDate}
					onChange={(date: Date | null) => setStartDate(date)}
					timeInputLabel="Time:"
					dateFormat="MM/dd/yyyy h:mm aa"
					showTimeInput
				/>
				<input
					className={styles.contactFormSubmit}
					type="submit"
					value="Send"
				/>
			</form>
		</div>
		// <div
		// 	className={`${styles.ContactForm} ${status === "active" ? styles.active : ""}`}
		// 	onClick={onClick}
		// >

		// 	<form>
		// 		<input className="Contact_input__fWz9j" type="text" placeholder="Your name" name="name">
		// 		<input className="Contact_input__fWz9j" type="email" placeholder="Your e-mail" name="email">
		// 		<textarea className="Contact_textarea__8QEdX" placeholder="Write your message" name="message"></textarea>
		// 		<input className="Contact_submit__M6RFg" type="submit" value="Send">

		// 	</form>
		// </div>
	);
};
