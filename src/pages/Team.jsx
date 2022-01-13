import React, { useEffect } from "react";
import teams from "../team.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ld from "../images/linkedin.svg";
import ig from "../images/instagram.svg";
import gh from "../images/github.svg";
import ml from "../images/email.svg";
import ph from "../images/phone.svg";
import ScrollToTop from "../components/ScrollToTop";

const Team = () => {
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	AOS.init();
	const getIcon = (handle) => {
		switch (handle) {
			case "instagram":
				return ig;
			case "linkedin":
				return ld;
			case "github":
				return gh;
			case "email":
				return ml;
			case "phone":
				return ph;
			default:
				return;
		}
	};
	return (
		<section className="team">
			<div className="team-container">
				<div className="team-head">
					<span
						className="team-head-head"
						style={{ fontSize: "3rem", lineHeight: "2.5rem" }}
					>
						Team
					</span>
				</div>
				<div className="team-body">
					{teams.map((team, index) => (
						<div className="team-section" key={index}>
							<div className="team-section__head">
								<span>{team.teamTitle}</span>
							</div>
							<div className="team-section__body">
								<div className="row">
									{team.members.map((person, id) => (
										<div
											className="col-lg-25 col-md-33 col-sm-50"
											key={id}
										>
											<div
												className="person"
												style={{
													justifyContent:
														window.innerWidth < 880
															? window.innerWidth <
															  672
																? "center"
																: id % 3 !== 1
																? "flex-start"
																: "flex-end"
															: id % 2 === 0
															? "flex-start"
															: "flex-end",
												}}
												data-aos="fade-up"
											>
												<div
													className="person-box"
													style={{
														backgroundImage: `url(${person.image})`,
													}}
												>
													<span className="person-name">
														{person.name}
													</span>
													{/* <span className="person-subtitle">
														{person.subtitle
															? person.subtitle
															: team.teamTitle}
													</span> */}
													<div className="person-socials">
														{person.socials.map(
															(social, ind) => (
																<div
																	className="person-social"
																	key={ind}
																>
																	<a
																		href={
																			social.link
																		}
																	>
																		<img
																			src={getIcon(
																				social.handle
																			)}
																			alt={
																				social.username
																			}
																		/>
																	</a>
																</div>
															)
														)}
													</div>
												</div>
											</div>
										</div>
									))}
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

export default Team;
