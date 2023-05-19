import "@/styles/globals.css";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

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
		<html data-theme="lofi" lang="en">
			<body className={font.className}>
				<main className="min-h-screen relative z-10 flex justify-between items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
					<Navbar></Navbar>
					{children}
					<Footer></Footer>
				</main>
			</body>
		</html>
	);
}
