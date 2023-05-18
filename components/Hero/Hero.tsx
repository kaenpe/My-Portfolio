import React from "react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
	return (
		<div className="hero h-screen w-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="w-1/2 text-left">
					<AnimatedText
						text={"Welcome to my Portfolio"}
						className=""
					></AnimatedText>
					<p className="py-6">
						My name is Kamil and I am an aspiring full-stack web developer. I
						specialize in React and Next.js web applications. I aim to provide
						high level of client satisfaction. Here you can browse my projects
						showcasing my web development expertise.
					</p>
					<button className="btn">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
