import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

//function component
const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelS.jpeg')}
				style={styles.image}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $147,990</Text>
			</View>
		</View>
	);
};

// export component
export default CarItem;
