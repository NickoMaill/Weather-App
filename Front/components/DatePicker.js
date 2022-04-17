import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";
import { birthDay } from "../utils/dateVariables";
export default function DatePicker(props) {
	return (
		<>
			<View>
				<Text>{props.children}</Text>
				<Picker
					selectedValue={props.selectedValue}
					onValueChange={props.onValueChange}
					style={{ height: 50, width: 100, marginHorizontal: 10 }}
				>
					{props.data.map((item, i) => (
						<Picker.Item key={i} label={item} value={item} />
					))}
				</Picker>
			</View>
		</>
	);
}
