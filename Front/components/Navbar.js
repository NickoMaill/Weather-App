import { Image, TouchableOpacity, View } from "react-native";

export default function Navbar() {
	return (
		<>
			<View>
				<View>
					<TouchableOpacity>
                    <Image source={require("../assets/favorite.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity>
                    <Image source={require("../assets/home.png")} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity>
						<Image source={require("../assets/settings.png")} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}
