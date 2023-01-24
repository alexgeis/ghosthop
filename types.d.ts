import { StaticImageData } from "next/image";

type Card = {
	imgSrc: StaticImageData | string;
	name: string;
	position: string;
	id: number;
};
