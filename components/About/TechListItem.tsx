import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const TechListItem = ({ name }: { name: string }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const container = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0, transition: { duration: 1 } },
	};
	return (
		<motion.div
			ref={ref}
			initial={"initial"}
			animate={isInView ? "animate" : "initial"}
			variants={container}
		>
			<Image
				src={`/assets/svg/${name}.svg`}
				width={50}
				height={50}
				alt={`${name} logo`}
			/>
			<h4 className="text-2xl mt-0">{name.toUpperCase()}</h4>
		</motion.div>
	);
};

export default TechListItem;
