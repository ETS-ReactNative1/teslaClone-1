import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import CarItem from '../CarItem';
import cars from './cars';

// Inside of component CarsList we render the CarItem component
const CarsList = (props) => {
	return (
		<View style={styles.container}>
			<FlatList
				// Use data from mock up data file
				data={cars}
				// Render items from CarItem
				renderItem={({ item }) => <CarItem car={item} />}
				// Make scroll through CarItems inside of CarsList centralize and snap back
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
			/>
		</View>
	);
};

export default CarsList;
