import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import rulesImg from "../images/rules.svg";
import prizeImg from "../images/prizes.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import EventRules from "../components/EventRules";
import EventPrizes from "../components/EventPrizes";
import EventAbout from "../components/EventAbout";
import AllEvents from "../components/AllEvents";

const Event = ({ event }) => {
	AOS.init();
	const vh = window.innerHeight / 100;
	const [allEvents, setAllEvents] = useState(false);
	const [k, setK] = useState(0);
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
		setAllEvents(false);
		setK(0);
	}, [event]);
	const handleK = (a) => {
		if (a) setK(k === 2 ? 0 : k + 1);
		else setK(k === 0 ? 2 : k - 1);
	};
	return (
		<section
			className="event"
			style={{
				backgroundImage: `url(${event.backImg})`,
			}}
		>
			<div className="event-mac">
				<div className="event-mac-head">
					<div className="event-mac-head-buttons">
						<button className="event-mac-head__button">
							<Link to="/">
								<span className="material-icons">close</span>
							</Link>
						</button>
						<button className="event-mac-head__button">
							<Link to="/events">
								<span className="material-icons">remove</span>
							</Link>
						</button>
						<button
							className="event-mac-head__button"
							onClick={() => setAllEvents(true)}
						>
							<span className="material-icons">apps</span>
						</button>
					</div>
					<div className="event-mac-head-title">
						<span className="event-mac-head-title__text">
							{event.title}
						</span>
					</div>
					<div className="event-mac-head-switch">
						<button
							className="event-mac-head-switch__button"
							onClick={() => setAllEvents(true)}
						>
							<span className="material-icons">expand_more</span>
						</button>
					</div>
				</div>
				<div className="event-mac-body">
					<div className="event-mac-body-container">
						<div className="event-mac-body-images">
							{k === 0 &&
								event.aboutImgs.map((imgs, id) => (
									<img
										src={imgs}
										alt={event.title}
										className="event-mac-body-images__img"
										key={id}
									/>
								))}
							{k === 1 && (
								<>
									<img
										src={rulesImg}
										alt={`${event.title} Rules`}
										className="event-mac-body-images__Img"
									/>
								</>
							)}
							{k === 2 && (
								<>
									<img
										src={prizeImg}
										alt={`${event.title} Prizes`}
										className="event-mac-body-images__Img"
									/>
								</>
							)}
						</div>
						<div className="event-mac-body-content">
							<div className="event-mac-body-head">
								<span
									className="event-mac-body-head__text"
									data-aos="fade-left"
								>
									{k === 0 && <>About</>}
									{k === 1 && <>Rules</>}
									{k === 2 && <>Prizes</>}
								</span>
							</div>
							<div className="event-mac-body-details">
								{k === 0 && (
									<>
										<EventAbout
											content={event.content}
											mode={event.mode}
										/>
									</>
								)}
								{k === 1 && (
									<>
										<EventRules rules={event.rules} />
									</>
								)}
								{k === 2 && (
									<>
										<EventPrizes prizes={event.prizes} />
									</>
								)}
							</div>
						</div>
					</div>
					<div className="event-mac-body-buttons">
						<button
							className="event-mac-body__button"
							onClick={() => handleK(false)}
						>
							<span className="material-icons">chevron_left</span>
						</button>
						<button
							className="event-mac-body__button"
							onClick={() => handleK(true)}
						>
							<span className="material-icons">
								chevron_right
							</span>
						</button>
					</div>
				</div>
			</div>
			{allEvents && <AllEvents onClick={() => setAllEvents(false)} />}
		</section>
	);
};

export default Event;
