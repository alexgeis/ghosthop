"use client";
import styles from "./listen.module.css";
import { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

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
				<div className={styles.mixCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1291838809&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						{/* <Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
						>
							enja
						</Link>{" "}
						·{" "} */}
						<Link
							href="https://soundcloud.com/enjaofficial/milkbar"
							title="[rotations | 06.20.2022] - Milk Bar (2010 ElectroPop Mix)"
							target="_blank"
						>
							[rotations | 06.20.2022]
							<br></br>
							Milk Bar
							<br></br>
							(2010 ElectroPop Mix)
						</Link>
					</div>
				</div>
				<div className={styles.mixCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029754588&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						{/* <Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
						>
							enja
						</Link>{" "}
						·{" "} */}
						<Link
							href="https://soundcloud.com/enjaofficial/ancient-origins-of-primordials"
							title="[rotations | 04.08.2021] - ancient origins of primordials (live mix)"
							target="_blank"
						>
							[rotations | 04.08.2021]
							<br></br>
							ancient origins of primordials
							<br></br>
							(live mix)
						</Link>
					</div>
				</div>
				<div className={styles.mixCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104399886&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						{/* <Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
						>
							enja
						</Link>{" "}
						·{" "} */}
						<Link
							href="https://soundcloud.com/enjaofficial/escaping-the-cave"
							title="[rotations | 08.11.2021] - escaping the cave (artistic mix)"
							target="_blank"
						>
							[rotations | 08.11.2021]
							<br></br>
							escaping the cave
							<br></br>
							(artistic mix)
						</Link>
					</div>
				</div>
				<div className={styles.mixCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104399886&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						{/* <Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
						>
							enja
						</Link>{" "}
						·{" "} */}
						<Link
							href="https://soundcloud.com/enjaofficial/escaping-the-cave"
							title="[rotations | 08.11.2021] - escaping the cave (artistic mix)"
							target="_blank"
						>
							[rotations | 08.11.2021]
							<br></br>
							escaping the cave
							<br></br>
							(artistic mix)
						</Link>
					</div>
				</div>
				<div className={styles.mixCard}>
					<iframe
						style={{ borderRadius: "12px", border: "0px" }}
						width="100%"
						height="166"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1133449834&color=%2300ffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					></iframe>
					<div>
						{/* <Link
							href="https://soundcloud.com/enjaofficial"
							title="enja"
							target="_blank"
							style="color: #cccccc; text-decoration: none;"
						>
							enja
						</Link>{" "}
						·{" "} */}
						<Link
							href="https://soundcloud.com/enjaofficial/becomingmachine"
							title="[rotations | 09.29.2021] - BecomingMachine (extended live mix)"
							target="_blank"
						>
							[rotations | 09.29.2021]
							<br></br>
							BecomingMachine
							<br></br>
							(extended live mix)
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
