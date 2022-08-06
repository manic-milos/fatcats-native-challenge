import React from 'react';
import { Button, View } from 'react-native';
import { CrewStackParamList } from './CrewHome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function CrewList({
	navigation,
}: {
  navigation: NativeStackNavigationProp<CrewStackParamList, 'CrewList'>;
}) {
	return (
		<View>
			<Button
				onPress={() =>
					navigation.navigate({ name: 'CrewMember', params: { id: '1' } })}
				title="Member details"
			/>
		</View>
	);
}

export default CrewList;
