import { useEffect, useState } from 'react';
import { API, Rocket } from '../API';

/**
 * Use this hook to get the rockets from the API.
 * It will return the rockets, a loading state, and an error state.
 * The loading state will be true until the rockets are loaded.
 * The error state will be set if there is an error. It is a string with the error message.
 * The retry function will reset the loading state and reload the rockets.
 * It should only be called from Error component.
 * @returns { { rockets: Rocket[], loading: boolean, error: string, retry: () => void } }
 */
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
