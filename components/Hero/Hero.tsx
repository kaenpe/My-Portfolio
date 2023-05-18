import React from "react";
import AnimatedText from "./AnimatedText";
import devImage from "../../public/assets/pngwing.com.png";
import Image from "next/image";
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

				<div className="w-3/4 md:w-1/2 text-center md:text-left">
					<AnimatedText
						text={"Welcome to my Portfolio"}
						className="text-xl md:text-6xl"
						type="h1"
					></AnimatedText>
					<AnimatedText
						text={`	My name is Kamil and I am an aspiring full-stack web developer. I
						specialize in React and Next.js web applications. I aim to provide
						high level of client satisfaction. Here you can browse my projects
						showcasing my web development expertise.`}
						className="text-xs sm:text-lg"
						type="p"
					></AnimatedText>
					<button className="btn">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
