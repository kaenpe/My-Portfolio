import React from "react";

const AnimatedText = ({
	text,
	className,
}: {
	text: string;
	className: string;
}) => {
	return (
		<h1 className={`text-5xl font-bold ${className}`}>
			{text.split(" ").map((el, id) => (
				<span key={id}>{el}&nbsp;</span>
			))}
		</h1>
	);
};

export default AnimatedText;
