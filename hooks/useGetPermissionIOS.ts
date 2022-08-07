import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Permission, request } from 'react-native-permissions';

export function useGetPermissionIOS(askedPermission:Permission) {
	const [permission, setPermission] = useState<string>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();

	useEffect(() => {
		if (Platform.OS !== 'ios') {
			setLoading(false);
			return;
		}
		if (!loading) return;
		setError(undefined);
		request(askedPermission)
			.then((granted) => {
				setPermission(granted);
				if (granted !== 'granted') setError('Permission denied');
				setLoading(false);
			})
			.catch(({ message }) => {
				setError(message);
				setLoading(false);
			});
	}, [loading, askedPermission]);
	return {
		permission,
		loading,
		error,
		retry: () => setLoading(true),
	};
}
