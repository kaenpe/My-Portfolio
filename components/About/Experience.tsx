import Link from "next/link";
import React from "react";
import Details from "./Details";

const Experience = () => {
	return (
		<div className="prose w-full relative">
			<h1 className="font-bold ">EXPERIENCE</h1>

			<div className="w-full relative prose text-left">
				<div className="absolute top-0 h-full w-[4px] bg-black origin-top" />
				<ul className="list-none w-full ml-2 sm:ml-4 md:ml-8 lg:ml-16 px-0">
					<Details
						position="Web Developer"
						company="Simulacrum"
						time="2021-2022"
						address="Będzin, PL"
						work="Co-founded a two-person startup providing web applications for clients from Poland."
					/>
					<Details
						position="Web Developer"
						company="Simulacrum"
						time="2021-2022"
						address="Będzin, PL"
						work="Co-founded a two-person startup providing web applications for clients from Poland."
					/>
					<Details
						position="Web Developer"
						company="Simulacrum"
						time="2021-2022"
						address="Będzin, PL"
						work="Co-founded a two-person startup providing web applications for clients from Poland."
					/>
					<Details
						position="Web Developer"
						company="Simulacrum"
						time="2021-2022"
						address="Będzin, PL"
						work="Co-founded a two-person startup providing web applications for clients from Poland."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
