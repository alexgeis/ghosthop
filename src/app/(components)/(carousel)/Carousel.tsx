"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

import { imageList } from "./imageData";

export default function Gallery() {
	const [index, setIndex] = useState<number>(0);

	function handleNextClick() {
		setIndex((index + 1) % imageList.length);
	}
	function handlePreviousClick() {
		setIndex((index - 1 + imageList.length) % imageList.length);
	}

	let prevImg = imageList[(index - 1 + imageList.length) % imageList.length];
	let currImg = imageList[index];
	let nextImg = imageList[(index + 1) % imageList.length];

	return (
		<>
			<div className={styles.carouselNavBtns}>
				<button onClick={handlePreviousClick}>Previous</button>
				<button onClick={handleNextClick}>Next</button>
			</div>

			<Image
				src={prevImg.src}
				alt={prevImg.alt}
				width={200}
				height={200}
				className={`${styles.carouselImg} ${styles.prevImg}`}
			/>
			<Image
				src={currImg.src}
				alt={currImg.alt}
				width={200}
				height={200}
				className={styles.carouselImg}
			/>
			<Image
				src={nextImg.src}
				alt={nextImg.alt}
				width={200}
				height={200}
				className={`${styles.carouselImg} ${styles.nextImg}`}
			/>

			<h3>
				({index + 1} of {imageList.length})
			</h3>
		</>
	);
}
