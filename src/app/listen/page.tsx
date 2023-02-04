"use client";
import styles from "./listen.module.css";
import { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

import { mixData } from "./mixData";
import MixCard from "./mixCard";

// REFERENCE FOR SOUNDCLOUD
// https://soundcloud.com/enjaofficial

export default function Listen() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className={styles.main}>
			<section className={styles.headWrap}>
				<h1 className={styles.header}>
					<a href="#music">Music</a>
					{` / `}
					<a href="#mixes">Mixes</a>
				</h1>
				<p className={styles.description}>
					Click one of the sections above to check out our DJ mixes and released
					music
				</p>
			</section>
			<h2 id="music">Music</h2>
			<section className={styles.musicSection}>
				<div className={styles.musicCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						src="https://open.spotify.com/embed/artist/0ETPddH5Oeip5NqDkdRf97?utm_source=generator"
						width="100%"
						height="100%"
						allowFullScreen
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
				<div className={styles.musicCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						src="https://open.spotify.com/embed/artist/41yri20ft220T9dx4A6mWa?utm_source=generator"
						width="100%"
						height="100%"
						allowFullScreen
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</section>
			<h2 id="mixes">Mixes</h2>
			<section className={styles.mixSection}>
				{mixData.map((mix, i) => {
					return (
						<MixCard
							mixUrl={mix.mixUrl}
							mixTitle={mix.mixTitle}
							djUrl={mix.djUrl}
							djTitle={mix.djTitle}
							iframeSrc={mix.iframeSrc}
							key={i}
						/>
					);
				})}
			</section>
		</main>
	);
}
