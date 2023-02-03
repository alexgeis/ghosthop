import styles from "./Hamburger.module.css";
import Link from "next/link";

type hamburgerProps = {
	pathname: string | null;
	pages: string[];
	hamOpen: boolean;
	menuToggle: React.MouseEventHandler<HTMLDivElement>;
	closeMenu: any;
};

export default function Hamburger({
	pathname,
	pages,
	hamOpen,
	menuToggle,
	closeMenu,
}: hamburgerProps) {
	return (
		<div className={styles.hamburgerWrapper}>
			<div
				className={`${styles.hamburgerBox} ${
					hamOpen ? styles.hamburgerBoxActive : ""
				}`}
				onClick={menuToggle}
			>
				<div className={`${hamOpen ? styles.hamburgerLineOne : ""}`}></div>
				<div className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}></div>
				<div className={`${hamOpen ? styles.hamburgerLineThree : ""}`}></div>
			</div>
			<nav
				className={`${styles.hamburgerMenu} ${
					hamOpen ? styles.hamburgerMenuActive : ""
				}`}
			>
				{pages.map((page: string, i: number) => {
					return (
						<div
							className={
								pathname == `/${page}`
									? styles.hamburgerLinkActive
									: styles.hamburgerLink
							}
							key={i}
						>
							<Link
								href={`${page}`}
								onClick={() => closeMenu()}
							>
								{page.toUpperCase()}
							</Link>
						</div>
					);
				})}
			</nav>
		</div>
	);
}
