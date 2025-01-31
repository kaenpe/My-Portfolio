import React from "react";
import ProjectElement from "./ProjectElement";
import Image from "next/image";

const Project = () => {
	return (
		<div className="hero min-h-screen bg-base-200 w-screen py-32 px-10">
			<div className="hero-content grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] place-items-center min-h-screen w-full">
				<ProjectElement
					text={
						"A website used to create and manage meaningful prompts for AI models"
					}
					img="proompta"
					title={"Proompta"}
					link="https://www.proompta.vercel.app"
					element={1}
				/>
				<ProjectElement
					text={"My first project using NextJS"}
					img="burger-builder"
					title={"Burger Maker"}
					link={"https://www.burgerbuilder.vercel.app"}
					element={2}
				/>
				<ProjectElement
					text={"First commercial website developed"}
					img="plumtree"
					title={"Plumtree Agency"}
					link="https://www.plumtreeagency.pl"
					element={3}
				/>
			</div>
		</div>
	);
};

export default Project;
