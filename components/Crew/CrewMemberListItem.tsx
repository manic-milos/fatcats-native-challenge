import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
	Pressable, StyleSheet, Text, View,
} from 'react-native';
import { Crew } from '../../API';
import { CrewStackParamList } from '../../screens/CrewList/CrewHome';
import Status from '../Status';

type CrewMemberListItemProps<TPage extends keyof CrewStackParamList> = {
    person: Crew;
    navigation: NativeStackNavigationProp<CrewStackParamList, TPage>;
};

function CrewMemberListItem<TPage extends keyof CrewStackParamList>({ person, navigation }: CrewMemberListItemProps<TPage>) {
	return (
		<Pressable
			style={[rowStyles.header, rowStyles.item]}
			onPress={() => navigation.navigate({ name: 'CrewMember', params: person })}
		>
			<View>
				<Text style={rowStyles.title}>{person.name}</Text>
				<Text
					style={rowStyles.subTitle}
				>
					{person.agency}
				</Text>
			</View>
			<Status status={person.status} />
		</Pressable>
	);
}

export const rowStyles = StyleSheet.create({
	item: {
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#fff9',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		marginTop: 3,
	},
	subTitle: {
		marginLeft: 20,
		marginTop: 3,
		marginBottom: 3,
		fontWeight: 'bold',
	},
});
export default CrewMemberListItem;
