import { useEffect, useState } from 'react';
import { API, Rocket } from '../API';

export function useGetRockets() {
	const [rockets, setRockets] = useState<Rocket[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();

	useEffect(() => {
		if (!loading) return;
		setError(undefined);
		API.getRockets()
			.then((data) => {
				setRockets(data);
				setLoading(false);
			})
			.catch(({ message }: {message: string}) => {
				setError(message);
				setLoading(false);
			});
	}, [loading]);
	return {
		rockets,
		loading,
		error,
		requestRefresh: () => setLoading(true),
	};
}
