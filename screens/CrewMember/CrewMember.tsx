import React from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import { CrewStackParamList } from '../CrewList/CrewHome';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetPermissionAndroid } from '../../hooks/useGetPermissionAndroid';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

type DetailsScreenRouteProp = RouteProp<CrewStackParamList, 'CrewMember'>;

function CrewMember({
	route: { params },
	navigation,
}: {
  route: DetailsScreenRouteProp;
  navigation: NativeStackNavigationProp<CrewStackParamList, 'CrewMember'>;
}) {
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
		return 	(
			<Error
				error={cameraPermissions.error}
				goBackCallback={() => cameraPermissions.retry()}
			/>
		);
	}
	if (mediaPermissions.loading || cameraPermissions.loading) return <Loading />;

	return (
		<View>
			<Text>{params.id}</Text>
		</View>
	);
}

export default CrewMember;
