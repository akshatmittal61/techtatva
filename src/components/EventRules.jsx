import React from "react";

const EventRules = ({ rules }) => {
	return (
		<div className="event-mac-body-rules" data-aos="fade-left">
			<ul className="event-mac-body-rules__ul">
				{rules.map((rule, index) => (
					<li className="event-mac-body-rules__li" key={index}>
						<span>{rule}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventRules;
