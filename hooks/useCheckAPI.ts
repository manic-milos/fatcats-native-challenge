import { useEffect, useState } from 'react';
import { API } from '../API';

export function useCheckAPI() {
	const [isAvailable, setIsAvailable] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();
	useEffect(() => {
		if (!loading) return;
		API.checkAPIAvailability()
			.then((ok) => {
				setIsAvailable(ok);
				setLoading(false);
			})
			.catch(({ message }) => {
				setError(message);
				setLoading(false);
			});
	}, [loading]);

	return {
		isAvailable,
		loading,
		error,
		retry: () => setLoading(true),
	};
}
