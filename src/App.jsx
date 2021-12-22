import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TimeLine from "./pages/TimeLine";

const App = () => {
	let location = useLocation();
	const getColor = (route) => {
		switch (route) {
			case "/contact":
				return "brown";
			case "/about":
				return "dark-purple";
			case "/team":
				return "blue";
			case "/events":
				return "green";
			case "/timeline":
				return "secondary";
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
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/timeline" element={<TimeLine />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
