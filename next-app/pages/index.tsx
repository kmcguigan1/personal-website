import type { NextPage } from "next";
import Head from "next/head";

// import components
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage/HomePage";

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Kiernan McGuigan</title>
				<meta name="description" content="View Kiernan McGuigan's personal website." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

      		<Navbar />
			<HomePage />

		</div>
	);
};

export default Home;
