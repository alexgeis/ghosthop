import styles from "./listen.module.css";
import Link from "next/link";

export default function mixCard({
	iframeSrc,
	mixUrl,
	mixTitle,
	djUrl,
	djTitle,
}) {
	const mixTitleArr = mixTitle.split(" ");
	console.log(mixTitleArr);

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
					// title="[rotations | 10.06.2021] - BecomingMachine2 (live mix)"
					title={mixTitle}
					target="_blank"
				>
					[SERIES TITLE | DATE]
					<br></br>
					MIX TITLE WITH SPACES
					<br></br>
					(SONG NOTES IN PARENS)
				</Link>
			</div>
		</div>
	);
}
