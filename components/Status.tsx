import React from 'react';
import { Text, View } from 'react-native';

function Status({ status } : {status: string}) {
	return (
		<View
			style={{
				marginTop: 5,
				marginBottom: 5,
				marginLeft: 15,
				marginRight: 20,
				padding: 10,
				paddingLeft: 15,
				paddingRight: 15,
				borderRadius: 5,
			}}
		>
			<View style={{ flex: 1 }}>
				<Text
					style={{
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
		</View>
	);
}

export default Status;
