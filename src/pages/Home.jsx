import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../images/favicon.png";
import bg from "../images/bg.jpg";

const Home = () => {
	const setMaxY = window.innerHeight;
	const vh = window.innerHeight / 100;
	const rem = window.innerWidth > 672 ? 16 : 12;
	const totalHeight = 300 * vh + 10 * rem;
	const maxY = Math.round(window.innerHeight / 100) * 50;
	const [scroll_img, setScroll_img] = useState(
		window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
	);
	const [scrollY, setScrollY] = useState(window.scrollY);
	window.addEventListener("scroll", () => {
		setScroll_img(
			window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
		);
		setScrollY(window.scrollY);
	});
	const calculateTimeLeft = () => {
		const difference = +new Date("12/29/2021") - +new Date();
		let timeLeft = {};
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});
	/* useEffect(() => {
		window.scrollTo(0, 0);
	}, []); */
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
							opacity: `${scroll_img * (100 / maxY)}%`,
						}}
					/>
				</div>
				<div
					className="home-hero-content"
					data-aos="fade-up"
					style={{
						background:
							window.scrollY > 60 * vh
								? "linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0))"
								: "transparent",
						height: window.scrollY > 60 * vh ? "30%" : "40%",
						position:
							window.scrollY > 60 * vh &&
							window.scrollY < totalHeight - 140 * vh
								? "fixed"
								: "relative",
					}}
				>
					<div className="home-hero-content-left"></div>
					<div className="home-hero-content-mid">
						<span style={{ fontSize: "3.5rem", fontWeight: "700" }}>
							TECHतत्त्व:
						</span>
						<span>Innovation Inspired</span>
					</div>
					<div className="home-hero-content-right"></div>
				</div>
			</div>
			<div
				className="home-about"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-about-container">
					<div className="home-about-image">
						<img />
					</div>
				</div>
			</div>
			<div
				className="home-about"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-about-head">Image Gallery</div>
				<div className="home-about-body">Add</div>
			</div>
			<div
				className="home-duration"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-duration-timer">
					<div className="home-duration-timer-days">
						{timeLeft.days}
						<span>Days </span>
					</div>
					<div className="home-duration-timer-hours">
						{timeLeft.hours}
						<span>Hours </span>
					</div>
					<div className="home-duration-timer-minutes">
						{timeLeft.minutes}
						<span>Minutes </span>
					</div>
					<div className="home-duration-timer-seconds">
						{timeLeft.seconds}
						<span>Seconds</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
