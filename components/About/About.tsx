"use client";
import React, { useRef } from "react";
import AnimatedAbout from "./AnimatedAbout";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Biography from "./Biography";
import AnimatedDivider from "./AnimatedDivider";

const About = () => {
	return (
		<div className="hero min-h-screen flex justify-center w-screen bg-base-200 items-start py-32 px-10">
			<div className="hero-content items-start text-center justify-start flex-col space-y-10">
				<div className="prose text-center">
					<AnimatedAbout
						text={"Welcome to my personal portfolio"}
						className="text-4xl md:text-6xl"
						type="h4"
					></AnimatedAbout>
				</div>
				<AnimatedDivider />
				<Biography></Biography>
				<AnimatedDivider />
				<Experience></Experience>
				<AnimatedDivider />
				<Technologies></Technologies>
				<AnimatedDivider />
			</div>
		</div>
	);
};

export default About;
