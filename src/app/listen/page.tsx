import styles from "./listen.module.css";
// import Image from "next/image";

export default function Listen() {
	return (
		<main className={styles.main}>
			<section className={styles.headWrap}>
				<h1 className={styles.header}>Listen to our mixes / music</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
					pariatur? Tempora animi consequatur aliquid esse vero cupiditate
					veniam temporibus debitis quas laboriosam iste sunt vitae maiores
					doloribus provident, ab quis?
				</p>
			</section>
			<h2>Music</h2>
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
			<h2>Mixes</h2>
			<section className={styles.mixSection}>
				<div className={styles.musicCard}></div>
			</section>
		</main>
	);
}
