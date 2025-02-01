import Link from "next/link";
import React from "react";
import { DiDebian } from "react-icons/di";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenuItem from "./NavMenuItem";
const Navbar = () => {
	const pages = ["HOME", "ABOUT", "PROJECTS"];
	return (
		<nav className="z-10 navbar fixed bg-base-300 w-screen h-16">
			<div className="flex-1">
				<Link href="home" className="btn btn-ghost normal-case text-xl prose">
					<DiDebian /> <span className="ml-2">My portfolio</span>
				</Link>
			</div>
			<ul className="space-x-3 mr-2">
				<li>
					<Link
						href="https://github.com/kaenpe/"
						target="_blank"
						className="text-2xl transition-all"
					>
						<FaGithub className="fill-base-content hover:fill-base-content/60"></FaGithub>
					</Link>
				</li>
				<li>
					<Link
						href="https://www.linkedin.com/in/kamil-knap-836587213/"
						target="_blank"
						className="text-2xl transition-all"
					>
						<FaLinkedin className="fill-base-content hover:fill-base-content/60"></FaLinkedin>
					</Link>
				</li>
			</ul>
			<div className="flex-none hidden md:flex">
				<ul className="menu menu-horizontal px-1 space-x-2">
					{pages.map((page, index) => (
						<NavMenuItem
							key={index}
							name={page}
							className='"text-lg transition-all hover:text-xl prose dark:prose-invert"'
						/>
					))}
				</ul>
			</div>
			<div className="dropdown dropdown-bottom dropdown-end md:hidden">
				<label tabIndex={0} className="btn btn-outline m-1">
					<RxHamburgerMenu />
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu p-2 mt-5 shadow bg-base-300 rounded-box w-52"
				>
					{pages.map((page, index) => (
						<NavMenuItem key={index} name={page} className="text-lg prose" />
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
