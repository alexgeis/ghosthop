import React, { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}

export default function Modal({ children }: ModalType) {
	return (
		<>
			<div className={styles.modalOverlay}>
				<div className={styles.modalBox}>{children}</div>
			</div>
		</>
	);
}
