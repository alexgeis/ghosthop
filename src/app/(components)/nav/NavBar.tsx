"use client";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";

import ghosthopLogo from "../../../assets/logos/ghost-alone.jpeg";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import AuthBtn from "./AuthBtn";

export function NavBar() {
	const pathname = usePathname();

	const pages = ["about", "listen", "contact"];

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
			/>
		</header>
	);
}
