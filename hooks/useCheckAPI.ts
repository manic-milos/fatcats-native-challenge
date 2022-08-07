import { useEffect, useState } from 'react';
import { API } from '../API';

/**
 * Use this hook to check API availability.
 * It will return the API availability, a loading state, and an error state.
 * The loading state will be true until the API availability is loaded.
 *  The error state will be set if there is an error. It is a string with the error message.
 * The retry function will reset the loading state and reload the API availability.
 * It should only be called from Error component.
 * @returns { { isAvailable: boolean, loading: boolean, error: string, retry: () => void } }
 */
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
