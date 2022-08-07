import { useEffect, useState } from 'react';
import { API, Crew } from '../API';

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
