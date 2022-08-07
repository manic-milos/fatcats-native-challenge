import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rockets from './Rockets';
import Error from '../../components/Error';

export type RocketStackParamList = {
  Rockets: undefined;
  Error: {message: string};
};

function RocketsHome() {
	const RocketsStack = createNativeStackNavigator<RocketStackParamList>();
	return (
		<RocketsStack.Navigator initialRouteName="Rockets">
			<RocketsStack.Screen name="Rockets" component={Rockets} />
			<RocketsStack.Screen name="Error" component={Error} />
		</RocketsStack.Navigator>
	);
}

export default RocketsHome;
