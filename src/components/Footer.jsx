import React from "react";
import events from "../events.js";
import _ from "lodash";
import iiitu from "../images/iiitu.gif";
import aavesh from "../images/aavesh.png";
import fb from "../images/facebook.svg";
import ld from "../images/linkedin.svg";
import ig from "../images/instagram.svg";
import gh from "../images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	const socialicons = [
		{
			link: "https://www.facebook.com/TeamAAVESH/",
			src: fb,
			alt: "TeamAAVESH",
		},
		{
			link: "https://www.linkedin.com/company/aavesh-iiitu/",
			src: ld,
			alt: "aavesh-iiitu",
		},
		{
			link: "https://www.instagram.com/teamaavesh/",
			src: ig,
			alt: "teamaavesh",
		},
		{
			link: "https://github.com/Aavesh-IIITU",
			src: gh,
			alt: "Aavesh-IIITU",
		},
	];
	return (
		<footer className="footer">
			<div className="footer-left">
				<div className="footer-left-top">TECHतत्त्व:</div>
				<div className="footer-left-mid">
					<div className="footer-left-mid-left">
						<div className="footer-left-mid-left-link">
							<Link to="/">Home</Link>
						</div>
						<div className="footer-left-mid-left-link">
							<Link to="/about">About</Link>
						</div>
						<div className="footer-left-mid-left-link">
							<Link to="/events">Events</Link>
						</div>
						<div className="footer-left-mid-left-link">
							<Link to="/team">Team</Link>
						</div>
						<div className="footer-left-mid-left-link">
							<Link to="/contact">Contact</Link>
						</div>
					</div>
					<div className="footer-left-mid-right">
						<div className="footer-left-mid-right-head">
							Events:
						</div>
						<div className="footer-left-mid-right-body">
							<div className="row">
								{events.map((event, index) => (
									<div
										className="col-lg-33 col-md-33 col-sm-50"
										key={index}
									>
										<Link
											to={`event/${_.kebabCase(
												event.title
											)}`}
										>
											{event.title}
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="footer-left-bottom">
					<div className="footer-left-bottom-head">
						<span>Follow Us</span>
					</div>
					<div className="footer-left-bottom-body">
						{socialicons.map((social, index) => (
							<div
								className="footer-left-bottom-body-social"
								key={index}
							>
								<a
									href={social.link}
									className="footer-left-bottom-body-social__link"
								>
									<img
										src={social.src}
										alt={social.alt}
										className="footer-left-bottom-body-social__img"
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="footer-right">
				<div className="footer-right-top">
					<div className="footer-right-top-image">
						<a href="https://iiitu.ac.in">
							<img
								className="footer-right-top__img"
								src={iiitu}
								alt="Indian Institute of Information Technology, Una"
							/>
						</a>
					</div>
				</div>
				<div className="footer-right-bottom">
					<div className="footer-right-bottom-image">
						<a href="https://aavesh-iiitu.github.io/">
							<img
								className="footer-right-bottom__img"
								src={aavesh}
								alt="Aavesh, IIITU"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
