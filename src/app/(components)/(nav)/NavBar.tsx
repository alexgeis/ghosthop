"use client";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// assets and elements
import ghosthopLogo from "../../../assets/logos/ghost-alone.jpeg";
import Hamburger from "./Hamburger";
import AuthBtn from "./AuthBtn";

export function NavBar() {
	// HAMBURGER LOGIC
	const [hamOpen, setHamOpen] = useState(false);

	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	// VARIABLES
	const pages = ["about", "listen", "contact"];
	const pathname = usePathname();

	return (
		<header className={styles.wrapper}>
			<noscript>
				<style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
			</noscript>
			{/* TODO: fix this ^^^ */}
			<div className={styles.logoWrapper}>
				<Link
					href="/"
					className={styles.logoLink}
					onClick={() => closeMenu()}
				>
					<Image
						src={ghosthopLogo}
						alt="ghosthop logo"
						className={styles.logo}
						width={80}
						height={80}
						priority
					></Image>
				</Link>
			</div>
			<nav className={styles.nav}>
				{pages.map((page: string, i: number) => {
					return (
						<div
							className={pathname == `/${page}` ? styles.navLinkActive : ""}
							key={i}
						>
							<Link
								href={`${page}`}
								className={styles.navLink}
							>
								{page.toUpperCase()}
							</Link>
						</div>
					);
				})}
				{/* LOGIN / LOGOUT */}
				<AuthBtn />
			</nav>
			{/* HAMBERDER */}
			<Hamburger
				pathname={pathname}
				pages={pages}
				hamOpen={hamOpen}
				menuToggle={hamburgerMenuToggle}
				closeMenu={closeMenu}
			/>
		</header>
	);
}
