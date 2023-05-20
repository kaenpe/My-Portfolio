import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AnimatedDivider = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const line = {
		initial: { width: 0 },
		animate: {
			width: "100%",
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			className="divider"
			ref={ref}
			variants={line}
			initial={"initial"}
			animate={isInView ? "animate" : "initial"}
		></motion.div>
	);
};

export default AnimatedDivider;
