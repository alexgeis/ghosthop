import "./globals.css";
import { NavBar } from "./(components)/(nav)/NavBar";
import { Footer } from "./(components)/(footer)/Footer";
import ScrollToTop from "./(components)/(scrollToTop)/scrollToTop";
import Providers from "./providers";

// manually delay for demo
// const MemoryGame = lazy(() => delayForDemo(import("./logic/MemoryGame")));
// function delayForDemo(promise: any) {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000);
// 	}).then(() => promise);
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<Providers>
					<NavBar />
					<ScrollToTop />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

// WORKING EXAMPLE - before AUTH
// export default function RootLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<html lang="en">
// 			{/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
// 			<head />
// 			<body>
// 				<NavBar />
// 				{children}
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }
