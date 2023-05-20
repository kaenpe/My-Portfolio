"use client";
import React from "react";
import Details from "./Details";
const Experience = () => {
	return (
		<div className="prose w-full relative">
			<h1 className="font-bold ">EXPERIENCE</h1>

			<div className="w-full relative prose text-left">
				<ul className="list-none w-full md:pl-8 lg:pl-16 pl-4">
					<Details
						position="Web Developer"
						company="Simulacrum"
						time="2021-2022"
						address="Będzin, PL"
						work="Co-founded a two-person startup providing web applications for clients from Poland. Experiences in Simulacrum expanded my knowledge and experties of web development and made me passionate about it."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
