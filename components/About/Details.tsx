const Details = ({ position, company, time, address, work }: IDetails) => {
	return (
		<li>
			<div className="">
				<h3 className="capitalize font-bold text-2xl">
					{position} <span className="text-warning">@{company}</span>
				</h3>
				<span>
					{time} | {address}
				</span>
				<p className="font-medium w-full">{work}</p>
			</div>
		</li>
	);
};

export default Details;
