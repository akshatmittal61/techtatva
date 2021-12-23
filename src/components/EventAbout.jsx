import React from "react";

const EventAbout = ({ content }) => {
	return (
		<div className="event-mac-body-about" data-aos="fade-left">
			{content.map((a, index) => (
				<div key={index} className="event-mac-body-about__content">
					{a}
				</div>
			))}
		</div>
	);
};

export default EventAbout;
