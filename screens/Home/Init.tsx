import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../App';
import { useCheckAPI } from '../../hooks/useCheckAPI';
import { useCheckNetState } from '../../hooks/useCheckNetState';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

type InitStackParamList = NativeStackNavigationProp<AppStackParamList, 'Init'>;

/**
 * Init screen checks connectivity and API availability. If both are available,
 * it navigates to Home screen. If one of them is not available, it navigates to Error screen.
 * @param navigation - navigation prop from navigation stack coming from App component
 */
function Init({	navigation }: { navigation: InitStackParamList}) {
	const { isOnline, error: errorNet, retry: retryNet } = useCheckNetState();
	const { isAvailable, error: errorAPI, retry: retryAPI } = useCheckAPI();

	useEffect(() => {
		if (isAvailable && isOnline) {
			navigation.navigate('Home');
		}
	}, [isAvailable, isOnline, navigation]);

	if (errorNet) { return <Error error={errorNet} goBackCallback={() => retryNet()} />; }
	if (errorAPI) { return <Error error={errorAPI} goBackCallback={() => retryAPI()} />; }
	return <Loading />;
}

export default Init;
