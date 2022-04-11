import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Login() {
	return (
		<>
			<SafeAreaView style={styles.mainContainer}>
				<View>
					<Text>Login</Text>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
    position: "absolute",
		top: 0,
	},
});
