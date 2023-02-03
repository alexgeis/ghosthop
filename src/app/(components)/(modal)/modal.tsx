import React, { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}

export default function Modal({ children, isOpen, toggle }: ModalType) {
	return (
		<>
			{isOpen && (
				<div
					className={styles.modalOverlay}
					onClick={toggle}
				>
					<div
						className={styles.modalBox}
						onClick={(e) => e.stopPropagation()} // stop event bubbling
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
}
