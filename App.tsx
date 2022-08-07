import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import Error from './components/Error';
import Init from './screens/Home/Init';

export type AppStackParamList = {
	Init: undefined
	Home: undefined;
	Error: {message: string};
};

const RootStack = createNativeStackNavigator<AppStackParamList>();

function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName="Init">
				<RootStack.Screen
					name="Init"
					component={Init}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen name="Error" component={Error} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

export default App;
