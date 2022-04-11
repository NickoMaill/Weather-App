import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";

export default function App() {
	return (
		<NativeRouter>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/homepage" element={<Homepage />} />
				<Route exact path="/favorites" element={<Favorites />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
			<Navbar />
		</NativeRouter>
	);
}

const styles = StyleSheet.create({});
