import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { CrewStackParamList } from './CrewHome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetCrew } from '../../hooks/useGetCrew';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import CrewMemberListItem from '../../components/Crew/CrewMemberListItem';

export type CrewListStackParamList = NativeStackNavigationProp<
  CrewStackParamList,
  'CrewList'
>;

function CrewList({ navigation }: {navigation: CrewListStackParamList}) {
	const {
		crew, error, loading, retry,
	} = useGetCrew();
	if (error) {
		return <Error error={error} goBackCallback={() => retry()} />;
	}
	if (loading) return <Loading />;
	return (
		<SafeAreaView>
			<FlatList
				data={crew}
				renderItem={({ item }) => (
					<CrewMemberListItem person={item} navigation={navigation} />
				)}
				keyExtractor={(item, index) => item.id}
			/>
		</SafeAreaView>
	);
}

export default CrewList;
