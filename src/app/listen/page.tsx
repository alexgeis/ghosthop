import styles from "./listen.module.css";
import Link from "next/link";
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
				<div className={styles.mixCard}>
					<iframe
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1291838809&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						<Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
						>
							enja
						</Link>{" "}
						·{" "}
						<Link
							href="https://soundcloud.com/enjaofficial/milkbar"
							title="[rotations | 06.20.2022] - Milk Bar (2010 ElectroPop Mix)"
							target="_blank"
						>
							[rotations | 06.20.2022] - Milk Bar (2010 ElectroPop Mix)
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
