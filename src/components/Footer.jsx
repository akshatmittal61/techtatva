import React from "react";
import events from "../events.js";
import _ from "lodash";
import iiitu from "../images/iiitu.gif";
import aavesh from "../images/aavesh.jpeg";
import fb from "../images/facebook.svg";
import ld from "../images/linkedin.svg";
import ig from "../images/instagram.svg";
import gh from "../images/github.svg";
import ml from "../images/email.svg";
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
		{
			link: "mailto:aavesh@iiitu.ac.in",
			src: ml,
			alt: "aavesh@iiitu.ac.in",
		},
	];
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-top-side">
					<div className="footer-top-side-logo">
						<a
							href="https://iiitu.ac.in"
							className="footer-top-side-logo__link"
						>
							<img
								src={iiitu}
								alt="iiitu"
								className="footer-top-side-logo__img"
							/>
						</a>
					</div>
				</div>
				<div className="footer-top-mid">
					<div
						className="footer-top-mid-top"
						style={{
							alignItems: "flex-end",
						}}
					>
						<span className="footer-top-mid-top__text">
							TECHतत्त्व | Aavesh
						</span>
					</div>
					<div className="footer-top-mid-mid">
						<div className="footer-top-mid-mid-socials">
							{socialicons.map((social, index) => (
								<div
									className="footer-top-mid-mid__social"
									key={index}
								>
									<a
										href={social.link}
										className="footer-top-mid-mid__social__link"
										title={social.alt}
									>
										<img
											src={social.src}
											alt={social.alt}
											className="footer-top-mid-mid__social__img"
										/>
									</a>
								</div>
							))}
						</div>
					</div>
					<div
						className="footer-top-mid-bottom"
						style={{
							alignItems: "flex-start",
						}}
					>
						<span
							className="footer-top-mid-bottom__text"
							style={{
								fontSize: "1.5rem",
							}}
						>
							&copy; Aavesh IIITU
						</span>
					</div>
				</div>
				<div className="footer-top-side">
					<div className="footer-top-side-logo">
						<a
							href="https://aavesh-iiitu.github.io/"
							className="footer-top-side-logo__link"
						>
							<img
								src={aavesh}
								alt="Aavesh"
								className="footer-top-side-logo__img"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom-events">
					{events.map((event, index) => (
						<div className="footer-bottom__event" key={index}>
							<Link to={`event/${_.kebabCase(event.title)}`}>
								{event.title}
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
