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

declare module "react-datepicker";
