import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CrewMember from '../CrewMember/CrewMember';
import CrewList from './CrewList';

export type CrewStackParamList = {
  CrewList: undefined;
  CrewMember: {
    id: string;
  };
};

const CrewStack = createNativeStackNavigator<CrewStackParamList>();

function CrewHome() {
	return (
		<CrewStack.Navigator initialRouteName="CrewList">
			<CrewStack.Screen name="CrewList" component={CrewList} />
			<CrewStack.Group screenOptions={{ presentation: 'modal' }}>
				<CrewStack.Screen name="CrewMember" component={CrewMember} />
			</CrewStack.Group>
		</CrewStack.Navigator>
	);
}

export default CrewHome;
