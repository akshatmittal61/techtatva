import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../images/favicon.png";
import bg from "../images/bg.jpg";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";

const Home = () => {
	const vh = window.innerHeight / 100;
	const rem = window.innerWidth > 880 ? 16 : 12;
	const totalHeight = 300 * vh + 10 * rem;
	const maxY = Math.round(window.innerHeight / 100) * 50;
	const [scroll_img, setScroll_img] = useState(
		window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
	);
	window.addEventListener("scroll", () => {
		setScroll_img(
			window.scrollY < maxY ? maxY - window.scrollY : maxY - maxY
		);
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
								? "var(--primary-4)"
								: "transparent",
						height: window.scrollY > 60 * vh ? "25%" : "40%",
						position:
							window.scrollY > 60 * vh &&
							window.scrollY < totalHeight - 140 * vh
								? "fixed"
								: "relative",
					}}
				>
					<div className="home-hero-content-left">
						<img
							className="home-hero-content-left__img"
							src={favicon}
							alt="TECHतत्त्व:"
							style={{
								display:
									window.scrollY > 60 * vh &&
									window.scrollY < totalHeight - 140 * vh
										? window.innerWidth > 880
											? "flex"
											: "none"
										: "none",
							}}
						/>
					</div>
					<div className="home-hero-content-mid">
						<span style={{ fontSize: "3.5rem", fontWeight: "700" }}>
							TECHतत्त्व: 2021
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
						<img src={about1} alt="About" />
					</div>
					<div className="home-about-content">
						<div className="home-about-content-head">
							About TECHतत्त्व:
						</div>
						<div className="home-about-content-body">
							Techtatva is the technical and social event
							conducted by AAVESH, IIIT Una. It marks days of
							absolute ecstasy providing participants a competing
							platform in technical, non-technical and some fun
							events.
						</div>
					</div>
				</div>
			</div>
			<div
				className="home-about"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-about-container">
					<div className="home-about-image">
						<img src={about2} alt="About" />
					</div>
					<div className="home-about-content">
						<div className="home-about-content-head">Mission</div>
						<div className="home-about-content-body">
							To promote Science, Technology, Engineering and
							Mathematics (STEM) activities to young people and
							the wider community.
							<ul
								style={{
									fontSize: "1rem",
									lineHeight: "1.25rem",
								}}
							>
								<li>
									A quality inclusive working environment
									which is responsive to a member's voice
								</li>
								<li>
									Learning from the past mistakes and working
									together as a team for the betterment of the
									institution.{" "}
								</li>
								<li>
									Setting an ideal "benchmark” for the coming
									year students regarding managing vital
									events of our institute.
								</li>
							</ul>
						</div>
					</div>
				</div>
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
