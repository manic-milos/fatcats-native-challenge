import React from 'react';
import { PERMISSIONS } from 'react-native-permissions';
import { useGetPermissionIOS } from '../../hooks/useGetPermissionIOS';
import Error from '../Error';
import Loading from '../Loading';

function RequestPermissionsIOS<TChildren>({ children } : {children: TChildren}) {
	const { ...attPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
	);
	const { ...iosmediaPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.MEDIA_LIBRARY,
	);
	const { ...ioscameraPermissions } = useGetPermissionIOS(
		PERMISSIONS.IOS.MEDIA_LIBRARY,
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
