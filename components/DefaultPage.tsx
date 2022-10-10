export const DefaultPage: React.FC = () => {
	return (
		<div
			className="wrapper"
			style={{
				background: 'tan',
			}}
		>
			<main className="container">
				<h1 style={{ textAlign: 'center' }}>Default Page</h1>
				<a
					style={{ textAlign: 'center' }}
					href="http://rfkquery.localhost:3000/"
				>
					@rfkquery
				</a>
				<a style={{ textAlign: 'center' }} href="http://wesbos.localhost:3000/">
					@wesbos
				</a>
				<a
					style={{ textAlign: 'center' }}
					href="http://stolinski.localhost:3000/"
				>
					@stolinski
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
