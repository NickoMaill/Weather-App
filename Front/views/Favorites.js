import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<ScrollView>
					<Text>Favoris</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		position: "absolute",
		top: 0,
	},
});
