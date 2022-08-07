import React from 'react';
import { Text, View } from 'react-native';

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
