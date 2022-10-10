import { IDatabase } from './_app';
import { NextPage } from 'next';

interface Props {
	data: IDatabase;
}

const Home: NextPage<Props> = ({ data }) => {
	return (
		<div
			className="wrapper"
			style={{
				background: data.color,
			}}
		>
			<main className="container">
				<a target="_blank" href="http://localhost:3000/">
					back
				</a>
				<section className="user-card">
					<h1>{data.name}</h1>

					<a href={data.website} target="_blank">
						{data.website.replace('https://', '').replace('/', '')}
					</a>
					<a target="_blank" href={`https://twitter.com/${data.username}`}>
						@{data.username}
					</a>
				</section>

				<section className="likes">
					<h2>Things I Like</h2>

					<div className="grid">
						{data.likes.map((like) => (
							<div key={like} className="item">
								{like}
							</div>
						))}
					</div>
				</section>
			</main>
			<footer>
				<a href="https://raymondkneipp.com" target="_blank">
					Created by Raymond Kneipp
				</a>
			</footer>
		</div>
	);
};

export default Home;
