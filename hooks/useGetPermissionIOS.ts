import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Permission, request } from 'react-native-permissions';

/**
 * Use this hook to request an iOS permission.
 * It will return the permission, a loading state, and an error state.
 * The loading state will be true until the permission is loaded.
 * The error state will be set if there is an error. It is a string with the error message.
 * The retry function will reset the loading state and reload the permission.
 * It should only be called from Error component.
 * It uses the react-native-permissions package.
 * @param askedPermission - An iOS permission to request.
 * @returns {permission: string, loading: boolean, error: string, retry: () => void}
 *  - The permission state, loading state, error state, and a function to retry.
 */
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
