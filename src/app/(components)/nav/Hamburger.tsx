"use client";
import styles from "./Hamburger.module.css";
import { useState } from "react";
import Link from "next/link";

type hamburgerProps = {
	pathname: string | null;
	pages: string[];
};

export default function Hamburger({ pathname, pages }: hamburgerProps) {
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
				{pages.map((page: string, i: number) => {
					return (
						<div
							className={
								pathname == `/${page}`
									? styles.hamburgerLinkActive
									: styles.hamburgerLink
							}
							key={i}
						>
							<Link
								href={`${page}`}
								onClick={() => closeMenu()}
							>
								{page.toUpperCase()}
							</Link>
						</div>
					);
				})}
			</nav>
		</div>
	);
}
