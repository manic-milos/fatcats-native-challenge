import { useEffect, useState } from 'react';
import { PermissionsAndroid, Permission } from 'react-native';

export function useGetPermissionAndroid(askedPermission: Permission) {
	const [permission, setPermission] = useState<string>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();
	useEffect(() => {
		if (!loading) return;
		setError(undefined);
		PermissionsAndroid.request(askedPermission)
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
