import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Rockets from './screens/Rockets/Rockets';
import CrewHome, { CrewStackParamList } from './screens/CrewList/CrewHome';

export type RootTabParamList = {
  Rockets: undefined;
  Crew: CrewStackParamList;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Crew">
				<Tab.Screen name="Rockets" component={Rockets} />
				<Tab.Screen
					name="Crew"
					component={CrewHome}
					options={{ headerShown: false }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
