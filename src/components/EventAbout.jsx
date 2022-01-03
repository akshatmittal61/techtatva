import React from "react";

const EventAbout = ({ content, mode }) => {
	return (
		<div className="event-mac-body-about" data-aos="fade-left">
			{content.map((a, index) => (
				<div key={index} className="event-mac-body-about__content">
					{a}
				</div>
			))}
			{mode && (
				<div className="event-mac-body-about__content">
					<div className="event-mac-body-about-mode">
						<span className="event-mac-body-about-mode__icon">
							<span className="material-icons">
								interpreter_mode
							</span>
						</span>
						<span className="event-mac-body-about-mode__text">
							{mode}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default EventAbout;
