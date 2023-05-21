import Link from "next/link";
import React from "react";

const NavMenuItem = ({
	name,
	className,
}: {
	name: string;
	className: string;
}) => {
	return (
		<li>
			<Link href={`${name.toLowerCase()}`} className={className}>
				{name}
			</Link>
		</li>
	);
};

export default NavMenuItem;
