import React from 'react';
import { PERMISSIONS } from 'react-native-permissions';
import { useGetPermissionIOS } from '../../hooks/useGetPermissionIOS';
import Error from '../Error';
import Loading from '../Loading';
/**
 * A wrapper component to request permissions on iOS.
 * It is used to request permissions for the following permissions:
 *  -App Tracking Transparency
 * - Camera
 * - Gallery
 * if any of these permissions are not granted, the Error component is displayed.
 * If all permissions are granted, the children are rendered.
 * @param children - children of the component to render inside.
 */
function RequestPermissionsIOS<TChildren>({ children } : {children: TChildren}) {
	const { ...attPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
	);
	const { ...iosmediaPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.MEDIA_LIBRARY,
	);
	const { ...ioscameraPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.CAMERA,
	);
	if (attPermissions.error) {
		return (
			<Error
				error={attPermissions.error}
				goBackCallback={() => attPermissions.retry()}
			/>
		);
	}
	if (iosmediaPermissions.error) {
		return (
			<Error
				error={iosmediaPermissions.error}
				goBackCallback={() => iosmediaPermissions.retry()}
			/>
		);
	}
	if (ioscameraPermissions.error) {
		return (
			<Error
				error={ioscameraPermissions.error}
				goBackCallback={() => ioscameraPermissions.retry()}
			/>
		);
	}
	if (
		attPermissions.loading ||
  iosmediaPermissions.loading ||
  ioscameraPermissions.loading
	) {
		return <Loading />;
	}
	return children;
}

export default RequestPermissionsIOS;
