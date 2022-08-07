import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

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
