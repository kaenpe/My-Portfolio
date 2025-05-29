import React from "react";
import ProjectElement from "./ProjectElement";
import Image from "next/image";

const Project = () => {
	return (
		<div className="hero min-h-screen bg-base-200 w-screen py-20 px-2">
			<div className="hero-content grid place-items-center min-h-screen w-full">
				<ProjectElement
					text={
						"A website used to create and manage meaningful prompts for AI models"
					}
					img="proompta"
					title={"Proompta"}
					link="https://proompta.vercel.app"
					element={1}
				/>
				<ProjectElement
					text={"My first project using NextJS"}
					img="burger-builder"
					title={"Burger Maker"}
					link={"https://burger-builder-nine.vercel.app"}
					element={2}
				/>
				<ProjectElement
					text={"First commercial website developed"}
					img="plumtree"
					title={"Plumtree Agency"}
					link="https://plumtreeagency.pl"
					element={3}
				/>
			</div>
		</div>
	);
};

export default Project;
