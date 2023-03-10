import { StaticImageData } from "next/image";

type EmployeeCard = {
	imgSrc: StaticImageData | string;
	name: string;
	position: string;
	id: number;
};

type MixData = {
	iframeSrc: string;
	mixUrl: string;
	mixTitle: string;
	djUrl: string;
	djTitle: string;
};

type CarouselImgData = {
	src: string | StaticImageData;
	alt: string;
};

declare module "react-datepicker";
