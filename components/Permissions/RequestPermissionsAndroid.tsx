import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { useGetPermissionAndroid } from '../../hooks/useGetPermissionAndroid';
import Error from '../Error';
import Loading from '../Loading';

/**
 * A wrapper component to request permissions on Android.
 * It is used to request permissions for the following permissions:
 * - camera
 * - gallery
 * if any of these permissions are not granted, the Error component is displayed.
 * If all permissions are granted, the children are rendered.
 * @param children - children of the component to render inside.
 */
function RequestPermissionsAndroid<TChildren>({	children }: { children: TChildren}) {
	const { ...mediaPermissions } = useGetPermissionAndroid(
		PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
	);
	const { ...cameraPermissions } = useGetPermissionAndroid(
		PermissionsAndroid.PERMISSIONS.CAMERA,
	);

	if (mediaPermissions.error) {
		return (
			<Error
				error={mediaPermissions.error}
				goBackCallback={() => mediaPermissions.retry()}
			/>
		);
	}
	if (cameraPermissions.error) {
		return (
			<Error
				error={cameraPermissions.error}
				goBackCallback={() => cameraPermissions.retry()}
			/>
		);
	}
	if (mediaPermissions.loading || cameraPermissions.loading) {
		return <Loading />;
	}
	return children;
}

export default RequestPermissionsAndroid;
