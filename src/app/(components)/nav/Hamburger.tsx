"use client";
import styles from "./Hamburger.module.css";
import { useState } from "react";
import Link from "next/link";

type hamburgerProps = {
	pathname: string | null;
};

export default function Hamburger({ pathname }: hamburgerProps) {
	const [hamOpen, setHamOpen] = useState(false);
	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	return (
		<div className={styles.hamburgerWrapper}>
			<div
				className={styles.hamburgerBox}
				onClick={hamburgerMenuToggle}
			>
				<div className={`${hamOpen ? styles.hamburgerLineOne : ""}`}></div>
				<div className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}></div>
				<div className={`${hamOpen ? styles.hamburgerLineThree : ""}`}></div>
			</div>
			<nav
				className={`${styles.hamburgerMenu} ${
					hamOpen ? styles.hamburgerMenuActive : ""
				}`}
			>
				<div
					className={
						pathname == "/about"
							? styles.hamburgerLinkActive
							: styles.hamburgerLink
					}
				>
					<Link
						href="/about"
						onClick={() => closeMenu()}
					>
						ABOUT
					</Link>
				</div>
				<div
					className={
						pathname == "/listen"
							? styles.hamburgerLinkActive
							: styles.hamburgerLink
					}
				>
					<Link
						href="/listen"
						onClick={() => closeMenu()}
					>
						LISTEN
					</Link>
				</div>
				<div
					className={
						pathname == "/contact"
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
			</nav>
		</div>
	);
}
