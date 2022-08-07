import React from 'react';
import { Text, View } from 'react-native';

/**
 * A small component to display entity status.
 * It is used to display a crew member's status, and a rocket's status.
 * It is also already positioned in the row/header.
 * @param status The status to display.
 */
function Status({ status } : {status: string}) {
	return (
		<View>
			<Text
				style={{
					marginTop: 15,
					marginBottom: 15,
					marginLeft: 25,
					marginRight: 30,
					fontWeight: '500',
					borderWidth: 1,
					borderColor: '#eee',
					padding: 5,
					backgroundColor: status === 'active' ? '#34be3b' : '#fff0',
				}}
			>
				{status}
			</Text>
		</View>
	);
}

export default Status;
