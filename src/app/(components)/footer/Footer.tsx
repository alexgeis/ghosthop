import styles from "./Footer.module.css";
import Image from "next/image";
import githubLogo from "../../../assets/icons/footer/github-mark.svg";
// import linkedInLogo from "../../assets/icons/footer/linkedin-round-icon.svg";
import instagramLogo from "../../../assets/icons/footer/Instagram_Glyph_Gradient_RGB.svg";
import spotifyLogo from "../../../assets/icons/footer/spotify-icon.svg";

export function Footer() {
	return (
		<footer className={styles.wrapper}>
			<a
				className={styles.footLink}
				href="https://www.instagram.com/ghosthopofficial/"
				target="_blank"
				rel="noreferrer"
			>
				<div className={styles.iconWrapper}>
					<Image
						src={instagramLogo}
						alt="instagram"
						className={styles.footerImg}
					/>
				</div>
			</a>
			<a
				className={styles.footLink}
				href="https://github.com/alexgeis/ghosthop"
				target="_blank"
				rel="noreferrer"
			>
				<div className={styles.iconWrapper}>
					<Image
						src={githubLogo}
						alt="github"
						className={styles.footerImg}
					/>
				</div>
			</a>

			<a
				className={styles.footLink}
				href="https://open.spotify.com/artist/41yri20ft220T9dx4A6mWa?si=-e-vKZuXSvqnzf3-7tIjDA"
				target="_blank"
				rel="noreferrer"
			>
				<div className={styles.iconWrapper}>
					<Image
						src={spotifyLogo}
						alt="spotify"
						className={styles.footerImg}
					/>
				</div>
			</a>
		</footer>
	);
}
