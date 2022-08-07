import React from 'react';

import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { rowStyles } from './CrewMemberListItem';
import { Crew } from '../../API';

function CrewMemberDetails({ person }: {person: Crew}) {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<ScrollView
				style={{
					flex: 1,
					width: '100%',
					backgroundColor: '#fff8',
					zIndex: 0,
				}}
			>
				<View
					style={{
						width: '100%',
						justifyContent: 'flex-start',
					}}
				/>
				<View style={[rowStyles.item, rowStyles.header]}>
					<Text style={fieldStyles.label}>Name:</Text>
					<Text style={fieldStyles.field}>{person.name}</Text>

				</View>
				<View style={[rowStyles.item, rowStyles.header]}>
					<Text style={fieldStyles.label}>Agency:</Text>
					<Text style={[fieldStyles.field, { fontWeight: 'bold' }]}>{person.agency}</Text>

				</View>
				<View style={[rowStyles.item, rowStyles.header]}>
					<Text style={fieldStyles.label}>Status:</Text>
					<Text style={fieldStyles.field}>{person.status}</Text>

				</View>
				<View>
					<Image
						source={{ uri: person.image }}
						resizeMode="cover"
						resizeMethod="resize"
						style={{
							width: '100%',
							minHeight: 500,
							zIndex: -1,
						}}
					/>
					<Text
						style={{
							position: 'absolute',
							zIndex: -2,
						}}
					>
						Loading image...
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

export default CrewMemberDetails;

export const fieldStyles = StyleSheet.create({
	label: {
		flex: 1,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'right',
		color: '#000',
		padding: 5,
	},
	field: {
		flex: 3,
		fontSize: 18,
		textAlign: 'right',
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 5,
	},

});
