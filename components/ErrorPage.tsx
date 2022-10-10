export const ErrorPage: React.FC = () => {
	return (
		<div
			className="wrapper"
			style={{
				background: 'tomato',
			}}
		>
			<main className="container">
				<h1 style={{ textAlign: 'center' }}>Error Page</h1>
				<a style={{ textAlign: 'center' }} href="http://localhost:3000/">
					Home
				</a>
			</main>
			<footer>
				<a href="https://raymondkneipp.com" target="_blank">
					Created by Raymond Kneipp
				</a>
			</footer>
		</div>
	);
};
