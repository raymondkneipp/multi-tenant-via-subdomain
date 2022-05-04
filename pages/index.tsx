import { NextPage } from "next";
import { IDatabase } from "./_app";

interface Props {
	data: IDatabase;
}

const Home: NextPage<Props> = ({ data }) => {
	return (
		<main>
			<h1>
				<em
					style={{
						background: data.color,
						borderRadius: "0.25rem",
						padding: "0.5rem",
					}}
				>
					{data.owner}
				</em>{" "}
				is the owner of{" "}
				<em
					style={{
						background: data.color,
						borderRadius: "0.25rem",
						padding: "0.5rem",
					}}
				>
					{data.key}
				</em>
			</h1>
			<p>Bio: {data.bio}</p>
		</main>
	);
};

export default Home;
