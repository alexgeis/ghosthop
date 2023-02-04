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
	const mixTitleArr = mixTitle.split(" ");

	const withinArrayRegex = /\[[^)]*\]/;
	const mixSeriesTitle: RegExpMatchArray | null =
		mixTitle.match(withinArrayRegex);

	/*
        \[ : match an opening array bracket
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \] : match closing array bracket

    */

	const mixTitleRegex = /\-\s([^)]*)\s\(/;
	let mixTitleAlone: RegExpMatchArray | null = mixTitle.match(mixTitleRegex);
	if (mixTitleAlone) mixTitleAlone[1] = mixTitleAlone[1].trim();

	/*
        \- : match a dash
        \s : match a whitespace
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \s : match a whitespace
        \( : match opening parentheses

    */

	const withinParensRegex = /\([^)]*\)/;
	const mixTypeTitle: RegExpMatchArray | null =
		mixTitle.match(withinParensRegex);
	/*
        \( : match an opening parentheses
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \) : match closing parentheses

    */

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
					{mixSeriesTitle && mixSeriesTitle[0]}
					<br></br>
					{mixTitleAlone && mixTitleAlone[1]}
					<br></br>
					{mixTypeTitle && mixTypeTitle[0]}
				</Link>
			</div>
		</div>
	);
}
