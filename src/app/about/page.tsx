import styles from "./about.module.css";
import Image from "next/image";
import { employeeData } from "./employeeData";
import instagramLogo from "../../assets/icons/footer/Instagram_Glyph_Gradient_RGB.svg";
import spotifyLogo from "../../assets/icons/footer/spotify-icon.svg";

export default function About() {
	return (
		<main className={styles.main}>
			<section className={styles.headWrap}>
				<h1 className={styles.header}>We&apos;re a team of DJ professionals</h1>
				<p className={styles.description}>
					{/* Hire one of our experienced entertainers */}
					Hire us today
				</p>
			</section>
			<section className={styles.team}>
				{employeeData.map((card) => {
					return (
						<div
							className={styles.card}
							key={card.id}
						>
							<span className={styles.cardImg}>
								<Image
									src={card.imgSrc}
									alt={card.name}
									width={200}
									height={140}
								/>
							</span>
							<div className={styles.cardOverlay}></div>
							<div className={styles.cardContent}>
								<p className={styles.cardContentHead}>{card.name}</p>
								<p className={styles.cardContentPos}>{card.position}</p>
							</div>
							<div className={styles.iconRowWrapper}>
								{card.instaURL && (
									<a
										style={{ textDecoration: "none" }}
										href={card.instaURL}
										target="_blank"
										rel="noreferrer"
									>
										<div className={styles.iconWrapper}>
											<Image
												src={instagramLogo}
												alt="instagram"
												className={styles.iconImg}
											/>
										</div>
									</a>
								)}
								<a
									style={{ textDecoration: "none" }}
									href={card.spottyURL}
									target="_blank"
									rel="noreferrer"
								>
									<div className={styles.iconWrapper}>
										<Image
											src={spotifyLogo}
											alt="spotify"
											className={styles.iconImg}
										/>
									</div>
								</a>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}
