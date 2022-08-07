import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../App';
import { useCheckAPI } from '../../hooks/useCheckAPI';
import { useCheckNetState } from '../../hooks/useCheckNetState';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

function Init({
	navigation,
}: {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Init'>;
}) {
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
