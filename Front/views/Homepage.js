import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
