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
import events from "./events.js";
import _ from "lodash";
import Event from "./pages/Event";

const App = () => {
	let location = useLocation();
	return (
		<>
			{location.pathname !== "/" && (
				<Header color={"tertiary"} />
			)}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/timeline" element={<TimeLine />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
					{events.map((event, index) => (
						<Route
							path={`/event/${_.kebabCase(event.title)}`}
							element={<Event event={event} />}
							key={index}
						/>
					))}
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
