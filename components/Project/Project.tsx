import React from "react";
import ProjectElement from "./ProjectElement";
import Image from "next/image";

const Project = () => {
	return (
		<div className="hero min-h-screen bg-base-200 w-screen py-32 px-10">
			<h1>MY PROJECTS</h1>
			<div className="hero-content grid grid-cols-2 place-items-center min-h-screen w-full">
				<ProjectElement text={"yo"} img="proompta" title={"Proompta"} />
				<ProjectElement
					text={"yo"}
					img="burger-builder"
					title={"Burger Maker"}
				/>
				<ProjectElement
					text={"yo"}
					img="plumtree"
					title={"Plumtree Agency"}
					isThird
				/>
			</div>
		</div>
	);
};

export default Project;
