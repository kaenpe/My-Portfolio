import React from "react";
import AnimatedHero from "./AnimatedHero";
import devImage from "../../public/assets/pngwing.com.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
	return (
		<div className="hero h-screen w-screen bg-base-200">
			<div className="hero-content text-center md:flex-row flex-col">
				<div className="w-3/4 md:w-1/2">
					<Image
						src={devImage}
						alt="hero image"
						className="w-full h-full"
					></Image>
				</div>

				<div className="prose text-center md:text-left">
					<AnimatedHero
						text={"Welcome to my personal portfolio"}
						className="text-xl md:text-6xl"
						type="h1"
					></AnimatedHero>
					<AnimatedHero
						text={`	My name is Kamil and I am an aspiring full-stack web developer. I
						specialize in React and Next.js web applications. I aim to provide
						high level of client satisfaction. Here you can browse my projects
						showcasing my web development expertise.`}
						className="text-xs sm:text-lg"
						type="p"
					></AnimatedHero>
					<div className="space-x-3">
						<Link href="/projects">
							<button className="btn rounded-md">My Projects</button>
						</Link>
						<Link href="/about">
							<button className="btn btn-outline rounded-md">About me</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
