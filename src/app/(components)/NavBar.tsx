"use client";
import styles from "./NavBar.module.css";
import { useState } from "react";
import ghosthopLogo from "../../assets/logos/ghost-alone.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
	const pathname = usePathname();

	const [hamOpen, setHamOpen] = useState(false);
	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	return (
		<header className={styles.wrapper}>
			<div className={styles.logoWrapper}>
				<Link
					href="/"
					className={styles.logoLink}
				>
					<Image
						src={ghosthopLogo}
						alt="ghosthop logo"
						className={styles.logo}
						width={90}
						height={90}
						priority
					></Image>
				</Link>
			</div>
			<nav className={styles.nav}>
				<div className={pathname == "/about" ? styles.navLinkActive : ""}>
					<Link
						href="about"
						className={styles.navLink}
					>
						ABOUT
					</Link>
				</div>
				<div className={pathname == "/listen" ? styles.navLinkActive : ""}>
					<Link
						href="listen"
						className={styles.navLink}
					>
						LISTEN
					</Link>
				</div>
				<div className={pathname == "/contact" ? styles.navLinkActive : ""}>
					<Link
						href="contact"
						className={styles.navLink}
					>
						CONTACT
					</Link>
				</div>
			</nav>
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
		</header>
	);
}
