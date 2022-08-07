import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Crew } from '../../API';
import CrewMember from '../CrewMember/CrewMember';
import CrewList from './CrewList';

export type CrewStackParamList = {
  CrewList: undefined;
  CrewMember: Crew;
};

const CrewStack = createNativeStackNavigator<CrewStackParamList>();

function CrewHome() {
	return (
		<CrewStack.Navigator initialRouteName="CrewList">
			<CrewStack.Screen
				name="CrewList"
				component={CrewList}
				options={{ headerTitle: 'Crew' }}
			/>
			<CrewStack.Group screenOptions={{ presentation: 'modal' }}>
				<CrewStack.Screen
					name="CrewMember"
					component={CrewMember}
					options={({ route }) => ({ title: route.params.name })}
				/>
			</CrewStack.Group>
		</CrewStack.Navigator>
	);
}

export default CrewHome;
