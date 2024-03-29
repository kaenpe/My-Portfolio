import { useRef } from "react";
import AnimatedIcon from "./AnimatedIcon";
import { useScroll, motion } from "framer-motion";

const Details = ({ position, company, time, address, work }: IDetails) => {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["center end", "center center"],
	});

	const { scrollYProgress: scrollYProgCircle } = useScroll({
		target: ref2,
		offset: ["center end", "center center"],
	});

	return (
		<li className="flex items-center">
			<motion.div
				style={{ scaleY: scrollYProgress }}
				ref={ref}
				className="absolute top-0 left-0 m-0 h-full w-[4px] bg-black origin-top"
			></motion.div>

			<div>
				<h3 className="capitalize font-bold text-2xl relative">
					{position}
					<span className="text-warning">&nbsp;@{company}</span>
				</h3>
				<span>
					{time} | {address}{" "}
					<AnimatedIcon ref={ref} path={scrollYProgress}></AnimatedIcon>
				</span>
				<p className="font-medium w-full">{work}</p>
			</div>
		</li>
	);
};

export default Details;
