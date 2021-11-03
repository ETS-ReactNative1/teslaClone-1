import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

//function component for buttons. They repeat at every screen, that's why it's interesting to create a component for it
const StyledButton = (props) => {
	// const type = props.type;
	// const content = props.content;
	// const onPress = props.onPress;
	// Deestructure to make it more concise:

	const { type, content, onPress } = props;
	// define background colors for buttons and text with types (primary, secondary)
	const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
	const textColor = type === 'primary' ? '#FFFFFF' : '#171A20CC';

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, { backgroundColor: backgroundColor }]}
				onPress={() => onPress()}
			>
				<Text style={[styles.text, { color: textColor }]}>{content}</Text>
			</Pressable>
		</View>
	);
};

// export component
export default StyledButton;
