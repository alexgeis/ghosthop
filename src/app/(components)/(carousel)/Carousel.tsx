"use client";
import { useState } from "react";
import Image from "next/image";

import { imageList } from "./imageData";

export default function Gallery() {
	const [index, setIndex] = useState<number>(0);

	function handleNextClick() {
		setIndex((index + 1) % imageList.length);
	}
	function handlePreviousClick() {
		setIndex((index - 1 + imageList.length) % imageList.length);
	}

	let image = imageList[index];

	return (
		<>
			<button onClick={handlePreviousClick}>Previous</button>
			<button onClick={handleNextClick}>Next</button>
			<h3>
				({index + 1} of {imageList.length})
			</h3>
			<Image
				src={image.src}
				alt={image.alt}
				width={200}
				height={200}
			/>
		</>
	);
}
