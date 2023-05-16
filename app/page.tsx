import Home from "@components/Home";

const getFighterData = async () => {
	const url = "https://mma-stats.p.rapidapi.com/May_13_2023";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "daa98300a3mshdce5fa79575d577p1b4ceejsn540444249dcb",
			"X-RapidAPI-Host": "mma-stats.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return result;
	} catch (error) {
		console.error(error);
	}
};
const page = async () => {
	const data = await getFighterData();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Home></Home>
		</main>
	);
};
export default page;
