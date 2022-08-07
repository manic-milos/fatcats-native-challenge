import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
	FlatList, SafeAreaView, View,
} from 'react-native';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RocketListItem from '../../components/Rockets/RocketListItem';
import { useGetRockets } from '../../hooks/useGetRockets';
import { RocketStackParamList } from './RocketsHome';

function Rockets({
	navigation,
}: {
  navigation: NativeStackNavigationProp<RocketStackParamList>;
}) {
	const {
		rockets, error, loading, requestRefresh,
	} = useGetRockets();

	if (error) return <Error error={error} goBackCallback={() => requestRefresh()} />;

	if (loading) return <Loading />;

	return (
		<SafeAreaView>
			<View>
				<FlatList
					data={rockets}
					renderItem={({ item }) => <RocketListItem rocket={item} />}
					keyExtractor={(item, index) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Rockets;
