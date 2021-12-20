import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../images/favicon.png";
import bg from "../images/bg.jpg";
import iiitu from "../images/iiitu.gif";
import aavesh from "../images/aavesh.png";

const Home = () => {
	const maxY = Math.round(window.innerHeight / 100) * 50;
	const [scroll_img, setScroll_img] = useState(
		window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
	);
	window.addEventListener("scroll", () => {
		setScroll_img(
			window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
		);
	});
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
						style={{
							maxWidth: `${scroll_img * (100 / maxY)}%`,
							maxHeight: `${scroll_img * (100 / maxY)}%`,
						}}
					/>
				</div>
				<div
					className="home-hero-content"
					data-aos="fade-up"
					style={{
						position: scroll_img > 0 ? "relative" : "fixed",
					}}
				>
					<span style={{ fontSize: "3.5rem", fontWeight: "700" }}>
						TECHतत्त्व:
					</span>
					<span>Innovation Inspired: {scroll_img}</span>
				</div>
			</div>
			<div
				className="home-about"
				style={{ backgroundImage: `url(${bg})` }}
			></div>
		</section>
	);
};

export default Home;
