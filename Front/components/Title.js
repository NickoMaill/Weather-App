import { Text, View, StyleSheet } from "react-native";

export default function Title(props) {
	return (
		<View style={props.style}>
			<Text style={styles.titleText}>{props.children}</Text>
		</View>
	);
}

const styles =   StyleSheet.create({
    titleText: {
		fontSize:20,
	},
})
