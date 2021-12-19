import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../images/favicon.png";
import bg from "../images/bg.jpg";
import iiitu from "../images/iiitu.gif";
import aavesh from "../images/aavesh.png";

const Home = () => {
	AOS.init();
	return (
		<section className="home">
			<div
				className="home-hero"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-hero-image">
					<img
						src={favicon}
						alt="Techtatva"
						className="home-hero-image__img"
						data-aos="zoom-in"
						data-aos-duration="1500"
					/>
				</div>
				<div className="home-hero-content" data-aos="fade-up">
					<span style={{ fontSize: "3.5rem", fontWeight: "700" }}>
						TECHतत्त्व:
					</span>
					<span>Innovation Inspired</span>
				</div>
			</div>
			<div
				className="home-about"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-about-logos">
					<div className="home-about-logo">
						<img className="home-about-logo__img" src={iiitu} />
					</div>
					<div className="home-about-logo">
						<img className="home-about-logo__img" src={aavesh} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
