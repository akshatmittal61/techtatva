import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
	let location = useLocation();
	const getColor = (route) => {
		switch (route) {
			case "/contact":
				return "brown";
			case "/about":
				return "green";
			case "/team":
				return "blue";
			case "/events":
				return "yellow";
			case "/timeline":
				return "red";
			case "/participate":
				return "indigo";
			default:
				return "bgcolor";
		}
	};
	return (
		<>
			{location.pathname !== "/" && (
				<Header color={getColor(location.pathname)} />
			)}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
