import React from "react";
import gold from "../images/gold.svg";
import silver from "../images/silver.svg";
import bronze from "../images/bronze.svg";

const EventPrizes = ({ prizes }) => {
	const images = [gold, silver, bronze];
	return (
		<div className="event-mac-body-prizes" data-aos="fade-left">
			<ul className="event-mac-body-prizes__ul">
				{prizes.map((prize, index) => (
					<li className="event-mac-body-prizes__li" key={index}>
						<div className="event-mac-body-prizes__image">
							<img
								alt={prize.title}
								src={images[index]}
								className="event-mac-body-prizes__img"
							/>
						</div>
						<span className="event-mac-body-prizes__text">
							{prize.title}: {prize.about}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventPrizes;
