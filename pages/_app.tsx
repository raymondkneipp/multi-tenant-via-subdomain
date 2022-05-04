import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export interface IDatabase {
	key: string;
	owner: string;
	bio: string;
	color: string;
}

const database: IDatabase[] = [
	{
		key: "hello",
		owner: "raymond",
		bio: "cool guy and awesome coder",
		color: "coral",
	},
	{
		key: "hi",
		owner: "tim",
		bio: "an okay guy",
		color: "cyan",
	},
	{
		key: "hey",
		owner: "anais",
		bio: "coolest chick ever",
		color: "plum",
	},
	{
		key: "yo",
		owner: "emily",
		bio: "basic chick",
		color: "springgreen",
	},
];

export default function MyApp({ Component, pageProps }: AppProps) {
	const [subdomain, setSubdomain] = useState<string | undefined>(undefined);
	const [data, setData] = useState<IDatabase | undefined>(undefined);

	useEffect(() => {
		const host = window.location.host; // gets the full domain of app

		// http://hi.hello.localhost:3000
		// arr[0] = hi
		// arr[1] = hello
		// arr[2] = localhost:3000
		const arr = host.split(".");

		if (arr.length >= 3) {
			// throw an error
			console.log("an error occured");
		} else {
			setSubdomain(arr[0]);
		}
	}, []);

	useEffect(() => {
		setData(
			database.find((item: IDatabase) => {
				return item.key === subdomain;
			})
		);
	}, [subdomain]);

	if (data === undefined) {
		if (subdomain === "localhost:3000") {
			return <h1>Default page</h1>;
		}
		return <h1>Error</h1>;
	}
	return <Component {...pageProps} data={data} />;
}
