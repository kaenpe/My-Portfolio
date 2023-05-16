import React from "react";
import { DiDebian } from "react-icons/di";

const Navbar = () => {
	return (
		<nav className="navbar bg-base-100 w-screen">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">
					<DiDebian /> <span className="ml-2">My portfolio</span>
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a className="nav-link">Projects</a>
					</li>
					<li>
						<a className="nav-link">Technologies</a>
					</li>
					<li>
						<a className="nav-link">About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
