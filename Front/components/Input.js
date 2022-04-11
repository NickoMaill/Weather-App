import { View, TextInput, Text, StyleSheet } from "react-native";

export default function Input(props) {
	return (
		<View>
			<Text style={styles.label}>{props.children}</Text>
			<View style={styles.input}>
				<TextInput secureTextEntry={props.secure} placeholder={props.placeholder} textContentType={props.type}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		margin: 5,
	},

	input: {
		borderStyle: "solid",
		borderColor: "#000",
		borderWidth:1,
		borderRadius:3,
		padding: 5,
		margin: 5,
		width:200,
	},
});