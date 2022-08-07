import { useEffect, useState } from 'react';
import { API, Crew } from '../API';

/**
 * Use this hook to get the crew from the API.
 * It will return the crew, a loading state, and an error state.
 * The loading state will be true until the crew is loaded.
 * The error state will be set if there is an error. It is a string with the error message.
 *
 * @returns { { crew: Crew[], loading: boolean, error: string, retry: () => void } }
 */
export function useGetCrew() {
	const [crew, setCrew] = useState<Crew[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();
	useEffect(() => {
		API.getCrew()
			.then((data) => {
				setCrew(data);
				setLoading(false);
			})
			.catch(({ message }: {message: string}) => {
				setError(message);
				setLoading(false);
			});
		return () => {
			setCrew([]);
			setLoading(true);
			setError(undefined);
		};
	}, []);
	return {
		crew, loading, error, retry: () => setLoading(true),
	};
}
