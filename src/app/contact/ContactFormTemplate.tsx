import styles from "./ContactFormTemplate.module.css";

import msgImg from "../../assets/img/msg.png"

type Props = {
	children?: React.ReactNode
};

export const ContactFormTemplate: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			{children}
			<div className={styles.imgWrapper}>
				<img src={msgImg} alt="conversation image" className={styles.img}/>
			</div>
		</div>
	)
};
