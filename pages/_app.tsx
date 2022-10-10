import '../globals.css';

import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import { DefaultPage } from '@/components/DefaultPage';
import { ErrorPage } from '@/components/ErrorPage';

export interface IDatabase {
	username: string;
	name: string;
	likes: string[];
	color: string;
	website: string;
}

const database: IDatabase[] = [
	{
		username: 'rfkquery',
		name: 'Raymond Kneipp',
		likes: ['dogs', 'cats', 'squirrels', 'coding'],
		color: 'skyblue',
		website: 'https://raymondkneipp.com',
	},
	{
		username: 'stolinski',
		name: 'Scott Tolinski',
		likes: ['bboying', 'music', 'tea', 'coding'],
		color: 'gold',
		website: 'https://scotttolinski.com/',
	},
	{
		username: 'wesbos',
		name: 'Wes Bos',
		likes: ['BBQ Tips', 'CSS', 'JavaScript', 'jokes'],
		color: 'SpringGreen',
		website: 'https://wesbos.com/',
	},
];

export default function MyApp({ Component, pageProps }: AppProps) {
	const [subdomain, setSubdomain] = useState<string | undefined>(undefined);
	const [data, setData] = useState<IDatabase | undefined>(undefined);

	useEffect(() => {
		// gets the full domain of app
		const host = window.location.host;

		// http://hello.localhost:3000
		// arr[0] = hello
		// arr[1] = localhost:3000
		const arr = host.split('.');

		if (arr.length >= 3) {
			console.log('an error occured');
		} else {
			setSubdomain(arr[0]);
		}
	}, []);

	useEffect(() => {
		setData(
			database.find((item: IDatabase) => {
				return item.username === subdomain;
			})
		);
	}, [subdomain]);

	if (data === undefined) {
		if (subdomain === 'localhost:3000') {
			return <DefaultPage />;
		}
		return <ErrorPage />;
	}
	return <Component {...pageProps} data={data} />;
}
