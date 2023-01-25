"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./ContactForm.module.css";
import { clean } from "./(helpers)/cleanPhone";

type ContactFormProps = {
	// onClick?: React.MouseEventHandler;
};

type formState = {
	name: string;
	email: string;
	phone: string;
	eventType: string;
	location: string;
	msg: string;
	refer: string;
};

export const ContactForm = ({}: ContactFormProps): JSX.Element => {
	const formRef = useRef<HTMLFormElement>(null);

	const INITIAL_STATE: formState = {
		name: "",
		email: "",
		phone: "",
		eventType: "",
		location: "",
		msg: "",
		refer: "",
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
		<main className={styles.wrapper}>
			<section className={styles.contactHeader}>
				<h1>Make your next event... pretty good</h1>
				<p>
					Ghosthop will travel for events throughout Denver, Boulder, and the
					surrounding areas.
				</p>
				<p>Get started now for a free consultation / quote</p>
			</section>
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
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="phone: (800) 867-5309"
					name="phone"
					value={form.phone}
					onChange={handleChange}
				/>
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="Type of event"
					name="eventType"
					value={form.eventType}
					onChange={handleChange}
				/>
				<label
					htmlFor="datePick"
					className={styles.datePickLabel}
				>
					Event Date &#38; Time
					<DatePicker
						selected={startDate}
						onChange={(date: Date | null) => setStartDate(date)}
						timeInputLabel="Time:"
						dateFormat="MM/dd/yyyy h:mm aa"
						showTimeInput
						className={styles.contactDatePicker}
					/>
				</label>
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="Event Location"
					name="location"
					value={form.location}
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
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="How did you hear about us?"
					name="refer"
					value={form.refer}
					onChange={handleChange}
				/>
				<input
					className={styles.contactFormSubmit}
					type="submit"
					value="Send"
				/>
			</form>
		</main>
	);
};
