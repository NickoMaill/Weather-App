import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function Homepage() {

	return (
		<>
			<SafeAreaView style={styles.mainContainer}>
				<View>
					<Text>Accueil</Text>
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
