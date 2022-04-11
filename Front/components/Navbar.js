import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<>
			<View style={styles.container}>
				<View>
					<TouchableOpacity onPress={() => navigate("/favorites")}>
							<Image style={styles.navBarIcon} source={require("../assets/favorite.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigate("/homepage")}>
						<Image source={require("../assets/rainy-day.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigate("/register")}>
						<Image source={require("../assets/settings.png")} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 25,
		position: "absolute",
		bottom: 0,
		width: "100%",
		justifyContent: "space-around",
		backgroundColor: "#e27cff",
	},
});
