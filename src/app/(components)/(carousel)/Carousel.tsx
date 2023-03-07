import { useState } from "react";
import Image from "next/image";

import { imageList } from "./imageData";

export default function Gallery() {
	const [index, setIndex] = useState(0);

	function handleClick() {
		setIndex(index + 1);
	}

	let image = imageList[index];
	return (
		<>
			<button onClick={handleClick}>Next</button>
			<button onClick={handleClick}>Previous</button>
			<h3>
				({index + 1} of {imageList.length})
			</h3>
			<Image
				src={image.src}
				alt={image.alt}
			/>
		</>
	);
}
