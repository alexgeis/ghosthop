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
	const [startDate, setStartDate] = useState<Date | null>(new Date());

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

	return (
		<main className={styles.wrapper}>
			<section className={styles.contactHeader}>
				<h1>Bring good music to your event</h1>
				<p>
					Ghosthop will travel for events throughout <br /> Denver, Boulder, and
					the surrounding areas.
				</p>
				<p>
					Reach out now for a free <strong>consultation</strong> or{" "}
					<strong>quote</strong>
				</p>
				<h6>* all fields are required</h6>
			</section>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className={styles.form}
			>
				<div className={styles.inputWrapper}>
					<label htmlFor="name">Full Name: *</label>
					<input
						className={styles.contactFormInput}
						type="text"
						id="name"
						name="name"
						placeholder="Bonanza Jellybean"
						value={form.name}
						onChange={handleChange}
						required
					/>
					<span className={styles.validity}></span>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor="email">Email: *</label>
					<input
						className={styles.contactFormInput}
						type="email"
						placeholder="hello@youregreat.com"
						name="email"
						value={form.email}
						onChange={handleChange}
						required
					/>
					<span className={styles.validity}></span>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor="phone">Phone: *</label>
					<input
						className={styles.contactFormInput}
						name="phone"
						type="tel"
						// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // xxx-xxx-xxxx
						pattern="^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$"
						placeholder="(800) 867-5309"
						value={form.phone}
						onChange={handleChange}
						required
					/>
					<span className={styles.validity}></span>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor="eventType">Event Type: *</label>
					<input
						className={styles.contactFormInput}
						type="text"
						placeholder="Brief event description..."
						name="eventType"
						value={form.eventType}
						onChange={handleChange}
						required
					/>
					<span className={styles.validity}></span>
				</div>
				<div className={styles.inputWrapperDate}>
					<label
						htmlFor="datePick"
						className={styles.datePickLabel}
					>
						Event Date <br></br>&#38; Time: *
					</label>
					<div className={styles.contactDateWrapper}>
						<DatePicker
							selected={startDate}
							onChange={(date: Date | null) => setStartDate(date)}
							timeInputLabel="Time:"
							dateFormat="MM/dd/yyyy h:mm aa"
							showTimeInput
							className={styles.contactDatePicker}
							required
						/>
					</div>
					{/* <span className={styles.validity}></span> */}
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor="location">Location: *</label>

					<input
						className={styles.contactFormInput}
						type="text"
						placeholder="Rubber Rose Ranch"
						name="location"
						value={form.location}
						onChange={handleChange}
						required
					/>
					<span className={styles.validity}></span>
				</div>
				<div className={styles.msgInputWrapper}>
					<label htmlFor="contactFormTextArea">Additional Details: *</label>
					<textarea
						className={styles.contactFormTextArea}
						id="contactFormTextArea"
						placeholder="Write your message"
						name="msg"
						value={form.msg}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<div className={styles.msgInputWrapper}>
					<label htmlFor="refer">How did you hear about us?: *</label>
					<input
						className={styles.contactFormInput}
						type="text"
						id="refer"
						placeholder="Referral, Google Search, etc."
						name="refer"
						value={form.refer}
						onChange={handleChange}
						required
					/>
				</div>

				<input
					className={styles.contactFormSubmit}
					type="submit"
					value="Send"
				/>
			</form>
		</main>
	);
};
