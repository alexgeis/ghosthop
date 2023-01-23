"use client";
import styles from "./NavBar.module.css";
import { useState } from "react";
import ghosthopLogo from "../assets/logos/ghost-alone.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

export function NavBar() {
	// const router = useRouter();
	const pathname = usePathname();

	const [hamOpen, setHamOpen] = useState(false);
	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

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

	return (
		<div className={styles.wrapper}>
			<div className={styles.logoWrapper}>
				<Link
					href="/"
					className={styles.logoLink}
				>
					<Image
						src={ghosthopLogo}
						alt="ghosthop logo"
						className={styles.logo}
						width={150}
						height={150}
					></Image>
				</Link>
				{/* GHOSTHOP */}
			</div>
			<div className={styles.nav}>
				<div className={pathname == "/contact" ? styles.active : ""}>
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
							pathname == "/"
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
				</div>
			</div>
		</div>
	);
}
