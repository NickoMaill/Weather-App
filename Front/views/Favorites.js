import { Text, View,  StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<View>
				<Text>Favoris</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
    position: "absolute",
		top: 0,
	},
});
