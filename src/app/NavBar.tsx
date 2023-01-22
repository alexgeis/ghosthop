"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

import { NavLink } from "react-router-dom";

export function NavBar() {
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
				<Link
					to="projects"
					className={({ isActive }) =>
						isActive ? styles.navLinkActive : styles.navLink
					}
				>
					projects
				</Link>
				<Link
					to="music"
					className={({ isActive }) =>
						isActive ? styles.navLinkActive : styles.navLink
					}
				>
					music
				</Link>
				<Link
					to="contact"
					className={({ isActive }) =>
						isActive ? styles.navLinkActive : styles.navLink
					}
				>
					contact
				</Link>
			</div>
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
					<Link
						to="projects"
						className={({ isActive }) =>
							isActive ? styles.hamburgerLinkActive : styles.hamburgerLink
						}
						onClick={() => closeMenu()}
					>
						projects
					</Link>
					<Link
						to="music"
						className={({ isActive }) =>
							isActive ? styles.hamburgerLinkActive : styles.hamburgerLink
						}
						onClick={() => closeMenu()}
					>
						music
					</Link>
					<Link
						to="contact"
						className={({ isActive }) =>
							isActive ? styles.hamburgerLinkActive : styles.hamburgerLink
						}
						onClick={() => closeMenu()}
					>
						contact
					</Link>
				</div>
			</div>
		</div>
	);
}
