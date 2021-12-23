import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import rulesImg from "../images/rules.svg";
import prizeImg from "../images/prizes.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import EventRules from "../components/EventRules";
import EventPrizes from "../components/EventPrizes";
import EventAbout from "../components/EventAbout";

const Event = ({ event }) => {
	AOS.init();
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	const [k, setK] = useState(0);
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
						<button className="event-mac-head__button">
							<span className="material-icons"></span>
						</button>
					</div>
					<div className="event-mac-head-title">
						<span className="event-mac-head-title__text">
							{event.title}
						</span>
					</div>
					<div className="event-mac-head-null"></div>
				</div>
				<div className="event-mac-body">
					<div className="event-mac-body-container">
						<div
							className="event-mac-body-images"
							style={{
								backgroundImage: `url(${
									k === 0
										? event.backImg
										: k === 1
										? rulesImg
										: prizeImg
								})`,
							}}
						></div>
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
										<EventAbout content={event.content} />
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
		</section>
	);
};

export default Event;
