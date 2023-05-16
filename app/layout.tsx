import "@/styles/globals.css";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My Portfolio",
	description: "My personal portfolio.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html data-theme="night" lang="en">
			<body className={inter.className}>
				<main className="app">
					<Navbar></Navbar>
					{children}
					<Footer></Footer>
				</main>
			</body>
		</html>
	);
}
