"use client";
import React from "react";
import TechListItem from "./TechListItem";
const Technologies = () => {
	const names = ["html", "css", "javascript", "react", "next.js", "node.js"];
	return (
		<div className="prose w-full relative">
			<h1 className="font-bold ">TECHNOLOGIES</h1>
			<p className="font-medium text-left">
				I have worked in a range of web development technologies, front-end to
				back-end. I believe that flexibility and willingness to adapt and learn
				is the most important aspect of being a developer.
			</p>
			<div className="text-slate-950 w-full text-left grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-items-center mt-20 child:flex child:flex-col child:items-center">
				{names.map((el, id) => (
					<TechListItem key={id} name={el} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
