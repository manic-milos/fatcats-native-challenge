import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

/**
 * Use this hook to check if the device is online.
 * It will return the online state, a loading state, and an error state.
 * The loading state will be true until the online state is loaded.
 * The error state will be set if there is an error. It is a string with the error message.
 * The retry function will reset the loading state and reload the online state.
 * It should only be called from Error component.
 *
 * @returns {isOnline: boolean, loading: boolean, error: string, retry: () => void}
 */
export function useCheckNetState() {
	const [isOnline, setIsOnline] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();
	useEffect(() => {
		if (!loading) return;
		setError(undefined);
		NetInfo.fetch()
			.then((state) => {
				setIsOnline(state.isConnected ?? false);
				setLoading(false);
			})
			.catch(({ message }) => {
				setError(message);
				setLoading(false);
			});
	}, [loading]);
	return {
		isOnline,
		loading,
		error,
		retry: () => setLoading(true),
	};
}
