"use client";
import styles from "./scrollToTop.module.css";
import { useState, useEffect, useRef } from "react";

export default function ScrollToTop() {
	const [btnShow, setBtnShow] = useState<boolean>(false);

	useEffect(() => {
		const handleScrollBtnShow = () => {
			window.scrollY > 100 ? setBtnShow(true) : setBtnShow(false);
		};

		window.addEventListener("scroll", handleScrollBtnShow);

		return () => {
			window.removeEventListener("scroll", handleScrollBtnShow);
		};
	}, []);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	return (
		<>
			{btnShow && (
				<button
					onClick={handleScrollToTop}
					id="myBtn"
					className={styles.myBtn}
					title="Go to top"
				>
					Top
				</button>
			)}
		</>
	);
}
