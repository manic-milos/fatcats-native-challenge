import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CrewHome, { CrewStackParamList } from '../CrewList/CrewHome';
import RocketsHome from '../Rockets/RocketsHome';

export type RootTabParamList = {
  RocketsHome: undefined;
  Crew: CrewStackParamList;
  Error: {message: string};
};

const Tab = createBottomTabNavigator<RootTabParamList>();

/**
 * The main tab navigator for the app.
 * After Init screen checks everything successfully,
 * it navigates here.
 */
function Home() {
	return (
		<Tab.Navigator
			initialRouteName="RocketsHome"
			screenOptions={{
				tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
				tabBarIconStyle: { display: 'none' },
			}}
		>
			<Tab.Screen
				name="RocketsHome"
				component={RocketsHome}
				options={{ title: 'Rockets', headerShown: false }}
			/>
			<Tab.Screen
				name="Crew"
				component={CrewHome}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}

export default Home;
