import { Image, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<>
			<View>
				<View>
					<TouchableOpacity onPress={() => navigate("/favorites")}>
						<Image source={require("../assets/favorite.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigate("/homepage")}>
						<Image source={require("../assets/home.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigate("/settings")}>
						<Image source={require("../assets/settings.png")} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}
