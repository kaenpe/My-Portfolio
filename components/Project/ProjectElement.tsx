import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
	title: string;
	text: string;
	link: string;
	img: string;
	isThird: boolean;
}

const ProjectElement = ({ title, text, link, img, isThird }: IProps) => {
	return (
		<div
			className={`grid grid-rows-2 h-full w-full justify-center items-center border border-solid border-black p-3 shadow-xl rounded-lg  ${
				isThird && "col-span-2 w-full"
			}`}
		>
			<div className="relative w-full h-full">
				<Image
					alt="proompta"
					src={`/assets/projects/${img}.png`}
					className="rounded-lg shadow-2xl"
					fill={true}
					style={{ objectFit: "cover" }}
				/>
			</div>

			<div className="prose text-center">
				<h1 className="text-5xl font-bold m-0 mt-5">{title}</h1>
				<p className="py-6 text-left">{text}</p>
				<button className="btn btn-primary">Get Started</button>
			</div>
		</div>
	);
};

export default ProjectElement;
