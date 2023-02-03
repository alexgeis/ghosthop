import React from "react";
import styles from "./AuthBtn.module.css";
// import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthBtn() {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	return (
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
	);
}
