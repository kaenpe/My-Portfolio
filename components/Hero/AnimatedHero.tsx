"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedHero = ({
	text,
	className,
	type,
}: {
	text: string;
	className: string;
	type: string;
}) => {
	const header = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: type === "h1" ? 0.15 : 0.01,
			},
		},
	};

	const words = {
		initial: { x: type === "h1" ? -50 : 50, opacity: 0 },
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const renderItems = () => {
		if (type === "h1") {
			return (
				<motion.h4
					variants={header}
					initial="initial"
					animate="animate"
					className={`text-6xl font-bold ${className}`}
				>
					{text.split(" ").map((el, id) => (
						<motion.span variants={words} key={id} className="inline-block">
							{el}&nbsp;
						</motion.span>
					))}
				</motion.h4>
			);
		} else if (type === "p") {
			return (
				<motion.p
					variants={header}
					initial="initial"
					animate="animate"
					className={`my-4 text-base font-medium ${className}`}
				>
					{text.split(" ").map((el, id) => (
						<motion.span variants={words} key={id} className="inline-block">
							{el}&nbsp;
						</motion.span>
					))}
				</motion.p>
			);
		}
	};

	return <>{renderItems()}</>;
};

export default AnimatedHero;
