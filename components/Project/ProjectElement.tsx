import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
	title: string;
	text: string;
	link: string;
	img: string;
}

const ProjectElement = ({ title, text, link, img }: IProps) => {
	return (
		<div className="prose border-solid w-full h-full border-base-content border rounded-xl flex items-center justify-center">
			<Link className="w-1/2">
				<Image
					src="/assets/projects/proompta.png"
					alt="web-thumbnail"
					className="w-full h-auto"
				></Image>
			</Link>

			<div className="flex flex-col justify-center items-center">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ProjectElement;
