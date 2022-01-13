import React, { useEffect } from "react";
import Button from "../components/Button.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import events from "../events.js";
import _ from "lodash";

const Events = () => {
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	return (
		<section className="events">
			<div className="events-head">
				<span className="events-head__text">Events</span>
			</div>
			<div className="events-body">
				{events.map((event, index) => (
					<div className="events-event" key={index}>
						<div className="events-event-container">
							<div className="events-event-image">
								<img
									src={event.backImg}
									alt={event.title}
									className="events-event-image__img"
								/>
							</div>
							<div className="events-event-content">
								<div className="events-event-content__title">
									{event.title}
								</div>
								<div className="events-event-content__about">
									{event.content[0]}
								</div>
								<div className="events-event__learn">
									<Button
										text="Register Here"
										containsLink
										link={`/event/${_.kebabCase(
											event.title
										)}`}
										size="small"
										color="indigo"
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<ScrollToTop />
		</section>
	);
};

export default Events;
