import React, { useEffect } from "react";
import timeline from "../timeline.js";
import AOS from "aos";
import "aos/dist/aos.css";
import timebg from "../images/time.jpg";
import ScrollToTop from "../components/ScrollToTop.jsx";

const TimeLine = () => {
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	AOS.init();
	return (
		<section
			className="timeline"
			style={{
				backgroundImage: `url(${timebg})`,
			}}
		>
			<div className="timeline-head">
				<span className="timeline-head-head">TimeLine</span>
			</div>
			<div className="timeline-body">
				<div
					className="timeline-bar"
					style={{ height: `${timeline.length * 8.5}rem` }}
				></div>
				<div className="timeline-container">
					{timeline.map((activity, index) => (
						<div
							className="activity"
							data-aos="fade-up"
							key={index}
						>
							<div className="activity-frame">
								<div className="activity-box">
									<div className="activity-title">
										{activity.title}
									</div>
									<div className="activity-content">
										{activity.time}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<ScrollToTop />
		</section>
	);
};

export default TimeLine;
