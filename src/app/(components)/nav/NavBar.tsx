"use client";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

import ghosthopLogo from "../../../assets/logos/ghost-alone.jpeg";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";

import { signIn, signOut, useSession } from "next-auth/react";

export function NavBar() {
	const { data: session, status } = useSession();
	const loading = status === "loading";

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
						width={90}
						height={90}
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
				<div className={styles.signedInStatus}>
					<p
						className={`nojs-show ${
							!session && loading ? styles.loading : styles.loaded
						}`}
					>
						{!session && (
							<>
								<a
									href={`/api/auth/signin`}
									className={styles.buttonPrimary}
									onClick={(e) => {
										e.preventDefault();
										signIn();
									}}
								>
									Sign In
								</a>
							</>
						)}
						{session?.user && (
							<>
								<a
									href={`/api/auth/signout`}
									className={styles.button}
									onClick={(e) => {
										e.preventDefault();
										signOut();
									}}
								>
									Sign Out
								</a>
							</>
						)}
					</p>
				</div>
			</nav>
			{/* HAMBERDER */}
			<Hamburger
				pathname={pathname}
				pages={pages}
			/>
		</header>
	);
}