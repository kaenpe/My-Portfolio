import React, { MutableRefObject } from "react";
import { MotionValue, motion } from "framer-motion";
const AnimatedIcon = ({
	ref,
	path,
}: {
	ref: MutableRefObject<null>;
	path: MotionValue<number>;
}) => {
	return (
		<figure
			className="stroke-dark m-0 inline
		"
		>
			<svg width="75" height="75" viewBox="0 0 100 100" className="inline">
				<motion.circle
					ref={ref}
					cx="50"
					cy="50"
					r="20"
					style={{ pathLength: path }}
					className="stroke-neutral stroke-[6px] fill-none"
				></motion.circle>
				<circle
					cx="50"
					cy="50"
					r="20"
					className="stroke-[5px] fill-white"
				></circle>
				<circle
					cx="50"
					cy="50"
					r="10"
					className="animate-pulse stroke-accent stroke-1 fill-warning"
				></circle>
			</svg>
		</figure>
	);
};

export default AnimatedIcon;
