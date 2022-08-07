import React from 'react';
import { Text, View } from 'react-native';
import { CrewStackParamList } from '../CrewList/CrewHome';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailsScreenRouteProp = RouteProp<CrewStackParamList, 'CrewMember'>;

function CrewMember({
	route: { params },
	navigation,
}: {
  route: DetailsScreenRouteProp;
  navigation: NativeStackNavigationProp<CrewStackParamList, 'CrewMember'>;
}) {
	return (
		<View>
			<Text>{params.id}</Text>
		</View>
	);
}

export default CrewMember;
