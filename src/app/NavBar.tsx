"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavBar() {
	const router = useRouter();

	const [hamOpen, setHamOpen] = useState(false);

	//TODO: update with better type
	const navLinkClickHandler = ({ currentTarget }: any) => {
		currentTarget.classList.add("active");
		// const tag: HTMLElement = e.currentTarget
		// if (!filter.includes(tag)) {
		//     setFilter([...filter, tag]);
		// } else {
		//     const filteredArray = filter.filter((item) => item !== tag);
		//     setFilter([...filteredArray]);
		// }
	};

	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.logoWrapper}>
				<a
					href="/"
					className={styles.logo}
				>
					geis
				</a>
			</div>
			<div className={styles.nav}>
				<div className={router.pathname == "/" ? styles.active : ""}>
					<Link href="/">HOME</Link>
				</div>
				<div className={router.pathname == "/contact" ? styles.active : ""}>
					<Link href="contact">CONTACT</Link>
				</div>
			</div>
			{/* HAMBERDER */}
			<div className={styles.hamburgerWrapper}>
				<div
					className={styles.hamburgerBox}
					onClick={hamburgerMenuToggle}
				>
					<div className={`${hamOpen ? styles.hamburgerLineOne : ""}`}></div>
					<div className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}></div>
					<div className={`${hamOpen ? styles.hamburgerLineThree : ""}`}></div>
				</div>
				<div
					className={`${styles.hamburgerMenu} ${
						hamOpen ? styles.hamburgerMenuActive : ""
					}`}
				>
					<div
						className={
							router.pathname == "/"
								? styles.hamburgerLinkActive
								: styles.hamburgerLink
						}
					>
						<Link
							href="/"
							onClick={() => closeMenu()}
						>
							HOME
						</Link>
					</div>
					<div
						className={
							router.pathname == "/contact"
								? styles.hamburgerLinkActive
								: styles.hamburgerLink
						}
					>
						<Link
							href="/contact"
							onClick={() => closeMenu()}
						>
							CONTACT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
