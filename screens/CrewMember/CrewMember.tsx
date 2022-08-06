import React from 'react';
import { Text, View } from 'react-native';
import { CrewStackParamList } from '../CrewList/CrewHome';
import { RouteProp } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<CrewStackParamList, 'CrewMember'>;

function CrewMember({ route: { params } }: {route: DetailsScreenRouteProp}) {
	return (
		<View>
			<Text>{params.id}</Text>
		</View>
	);
}

export default CrewMember;
