import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rockets from '../../components/Rockets/Rockets';
import Error from '../../components/Error';

export type RocketStackParamList = {
  Rockets: undefined;
  Error: {message: string};
};

/**
 * Home Screen for the Rockets screen.
 * It contains the navigation for the Rockets screen, and the Error screen.
 * @todo it is currently useless, because Error component is not navigated to from anywhere.
 */
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
