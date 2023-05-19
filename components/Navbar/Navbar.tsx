import Link from "next/link";
import React from "react";
import { DiDebian } from "react-icons/di";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
	const navElementsList = (num: number, className: string, [...args]) => {
		return Array(num)
			.fill(null)
			.map((el, id) => (
				<li key={id}>
					<Link href={`${args[id].toLowerCase()}`} className={className}>
						{args[id]}
					</Link>
				</li>
			));
	};
	return (
		<nav className="z-10 navbar fixed bg-base-300 w-screen h-16">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl prose">
					<DiDebian /> <span className="ml-2">My portfolio</span>
				</a>
			</div>
			<ul className="space-x-3">
				<li>
					<Link
						href="https://github.com/kaenpe/"
						target="_blank"
						className="text-2xl transition-all"
					>
						<FaGithub color="black"></FaGithub>
					</Link>
				</li>
				<li>
					<Link
						href="https://www.linkedin.com/in/kamil-knap-836587213/"
						target="_blank"
						className="text-2xl transition-all"
					>
						<FaLinkedin color="black"></FaLinkedin>
					</Link>
				</li>
			</ul>
			<div className="flex-none hidden md:flex">
				<ul className="menu menu-horizontal px-1">
					{navElementsList(
						3,
						"text-lg transition-all hover:text-xl prose dark:prose-invert",
						["HOME", "PROJECTS", "ABOUT"]
					)}
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
					{navElementsList(3, "text-lg prose", ["HOME", "PROJECTS", "ABOUT"])}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
