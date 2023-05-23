"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface IProps {
	title: string;
	text: string;
	link: string;
	img: string;
	element: number;
}

const ProjectElement = ({ title, text, link, img, element }: IProps) => {
	const wrapper = {
		initial: {
			x: element === 1 ? -50 : element === 2 ? 50 : element === 3 && 0,
			y: element === 3 && 150,
			opacity: 0,
		},
		animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={wrapper}
			className={`grid grid-rows-2 grid-cols-2 h-full w-full justify-center items-center border border-solid border-black p-3 shadow-xl rounded-lg  ${
				element === 3 && "col-span-2 w-full"
			}`}
		>
			<div className="relative w-full h-full col-span-2">
				<Image
					alt="proompta"
					src={`/assets/projects/${img}.png`}
					className="rounded-lg shadow-2xl"
					fill={true}
					style={{ objectFit: "cover" }}
				/>
			</div>

			<div className="prose text-center col-span-2">
				<h1 className="text-5xl font-bold m-0 mt-5">{title}</h1>
				<p className="py-6 text-left">{text}</p>
				<button className="btn btn-primary">Get Started</button>
			</div>
		</motion.div>
	);
};

export default ProjectElement;
