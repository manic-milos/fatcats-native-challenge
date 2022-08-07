import React, { useState } from 'react';
import {
	Pressable, StyleSheet, Text, View,
} from 'react-native';
import { Rocket } from '../../API';
import { rowStyles } from '../Crew/CrewMemberListItem';
import { fieldStyles } from '../Crew/CrewMemberDetails';
import Status from '../Status';

function RocketListItem({ rocket }: {rocket: Rocket}) {
	const [detailsOpened, setDetailsOpened] = useState(false);

	return (
		<Pressable onPress={() => setDetailsOpened(d => !d)} style={styles.row}>
			<View style={styles.rowHeader}>
				<View>
					<Text style={styles.HeaderLabel}>{rocket.name}</Text>
					<Text style={rowStyles.subTitle}>{rocket.company}</Text>
				</View>
				<View>
					<Status status={rocket.active ? 'active' : 'inactive'} />
				</View>
			</View>
			{detailsOpened ? (
				<>
					<View style={styles.rowBody}>
						<View style={styles.fieldRow}>
							<Text style={styles.label}>Type:</Text>
							<Text style={styles.field}>{rocket.type}</Text>
						</View>
						<View style={styles.fieldRow}>
							<Text style={styles.label}>Country:</Text>
							<Text style={styles.field}>{rocket.country}</Text>
						</View>
						<View style={styles.fieldRow}>
							<Text style={styles.label}>Cost per launch:</Text>
							<Text style={styles.field}>{rocket.cost_per_launch}</Text>
						</View>
						<View style={styles.fieldRow}>
							<Text style={styles.label}>Success rate:</Text>
							<Text style={styles.field}>
								{rocket.success_rate_pct}
								%
							</Text>
						</View>
						<View style={styles.fieldRow}>
							<Text style={styles.label}>No of stages:</Text>
							<Text style={styles.field}>{rocket.stages}</Text>
						</View>
					</View>
					<View style={styles.rowBody}>
						<Text>
							Description:
							{' '}
							{rocket.description}
						</Text>
					</View>
				</>
			) : null}
		</Pressable>
	);
}

export default RocketListItem;

export const styles = StyleSheet.create({
	row: {
		...rowStyles.item,
		padding: 0,
	},
	rowHeader: {
		...rowStyles.header,
		...rowStyles.item,
		margin: 0,
		flexDirection: 'row',
	},
	HeaderLabel: {
		...rowStyles.title,
		fontWeight: 'bold',
		fontSize: 20,
		margin: 5,
	},
	rowBody: {
		...fieldStyles.field,
		justifyContent: 'center',
		alignItems: 'center',
	},
	column: {
		flexDirection: 'column',
	},
	fieldRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 5,
		padding: 3,
	},
	label: {
		fontSize: 15,
	},
	field: {
		fontSize: 15,
		flex: 2,
	},
});
