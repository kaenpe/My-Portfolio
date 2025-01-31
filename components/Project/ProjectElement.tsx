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
		first: {
			x: -50,
			opacity: 0,
		},
		second: {
			x: 50,
			opacity: 0,
		},
		third: {
			y: 150,
			opacity: 0,
		},
		animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
	};

	return (
		<motion.div
			initial={
				element % 3 === 0
					? wrapper.third
					: element % 2 === 0
					? wrapper.second
					: wrapper.first
			}
			animate="animate"
			variants={wrapper}
			className={`grid min-h-[600px] grid-rows-2 grid-cols-2 h-full w-full justify-center items-center border border-solid border-black p-3 shadow-xl rounded-lg place-items-center  ${
				element % 3 === 0 && "col-span-2 w-full"
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

			<div className="prose text-center col-span-2 flex flex-col flex-center items-center">
				<h1 className="text-5xl font-bold m-0 mt-5">{title}</h1>
				<p className="py-6 text-left m-0">{text}</p>
				<Link href={`${link}`}>
					<button className="btn btn-accent transition-all duration-300 hover:bg-transparent hover:text-black">
						{title}
					</button>
				</Link>
			</div>
		</motion.div>
	);
};

export default ProjectElement;
