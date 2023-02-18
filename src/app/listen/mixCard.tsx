import styles from "./listen.module.css";
import Link from "next/link";
import { MixData } from "types/types";

export default function MixCard({
	iframeSrc,
	mixUrl,
	mixTitle,
	djUrl,
	djTitle,
}: MixData) {
	return (
		<div className={styles.mixCard}>
			<iframe
				style={{ borderRadius: "12px", border: "0px" }}
				width="100%"
				height="166"
				allow="autoplay"
				src={iframeSrc}
			></iframe>
			<div>
				{/* <Link
            href={djUrl}
            title={djTitle}
            target="_blank"
        >
            {djTitle}
        </Link>{" "}
        ·{" "} */}
				<Link
					href={mixUrl}
					title={mixTitle}
					target="_blank"
				>
					{mixTitle}
				</Link>
			</div>
		</div>
	);
}
