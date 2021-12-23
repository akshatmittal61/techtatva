import React from "react";
import { Link } from "react-router-dom";
import events from "../events.js";
import _ from "lodash";

const AllEvents = ({ onClick }) => {
	return (
		<div className="all-events">
			<div className="all-events-container">
				<div className="all-events-head">
					<button
						className="all-events-head__button"
						onClick={onClick}
					>
						<span className="material-icons">close</span>
					</button>
				</div>
				<div className="all-events-box">
					<div className="row">
						{events.map((event, index) => (
							<div
								className="col-lg-33 col-md-50 col-sm-100"
								key={index}
							>
								<div
									className="all-events-link"
									title={event.title}
								>
									<Link
										to={`/event/${_.kebabCase(
											event.title
										)}`}
									>
										{event.title}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllEvents;
