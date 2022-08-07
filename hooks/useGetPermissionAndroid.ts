import { useEffect, useState } from 'react';
import { PermissionsAndroid, Permission, Platform } from 'react-native';

/**
 * Use this hook to request an android permission.
 * It will return the permission, a loading state, and an error state.
 * The loading state will be true until the permission is loaded.
 * The error state will be set if there is an error. It is a string with the error message.
 * The retry function will reset the loading state and reload the permission.
 * It should only be called from Error component.
 * It uses PermisionsAndroid from react-native package.
 *
 * @param askedPermission - An iOS permission to request.
 * @returns {permission: string, loading: boolean, error: string, retry: () => void}
 *  - The permission state, loading state, error state, and a function to retry.
 */
export function useGetPermissionAndroid(askedPermission: Permission) {
	const [permission, setPermission] = useState<string>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>();
	useEffect(() => {
		if (Platform.OS !== 'android') {
			setLoading(false);
			return;
		}
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
