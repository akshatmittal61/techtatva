import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../images/favicon.png";
import favicon1 from "../images/favicon1.png";
import bg from "../images/bg.jpg";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import brochure from "../assets/brochure.pdf";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
	const vh = window.innerHeight / 100;
	const rem = window.innerWidth > 880 ? 16 : 12;
	const totalHeight = 300 * vh + 20 * rem;
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
		const difference = +new Date("1/22/2022") - +new Date();
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
			<Header
				style={{
					backgroundImage: `url(${bg})`,
					height: "12.5vh",
					backgroundColor: "rgba(0, 0, 0, 0.9)",
				}}
			/>
			<div
				className="home-hero"
				style={{ backgroundImage: `url(${bg})`, height: "87.5vh" }}
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
								? "rgba(0,0,0,0.5)"
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
						<span
							style={{
								fontSize:
									window.scrollY > 60 * vh
										? "2.5rem"
										: "3.5rem",
								fontWeight: "700",
							}}
						>
							TECHतत्त्व: 2022
						</span>
						<span
							style={{
								fontSize:
									window.scrollY > 60 * vh
										? "1.75rem"
										: "3rem",
							}}
						>
							Start making sense
						</span>
						{
							window.scrollY < 60 * vh && <span style={{
								fontSize: '1.25rem'
							}}>22 Jan - 23 Jan 2022</span>
						}
					</div>
					<div className="home-hero-content-right">
						<Button
							className="home-hero-content-left__img"
							text="Participate"
							style={{
								display:
									window.scrollY > 60 * vh &&
										window.scrollY < totalHeight - 140 * vh
										? window.innerWidth > 880
											? "flex"
											: "none"
										: "none",
							}}
							color="tertiary"
							containsLink
							link="/events"
						/>
					</div>
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
				className="home-navigation"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="home-navigation-top">
					<div className="home-navigation-link">
						<Link to="/about">About</Link>
					</div>
					<div className="home-navigation-link">
						<Link to="/events">Events</Link>
					</div>
				</div>
				<div className="home-navigation-mid">
					<div className="home-navigation-mid-left">
						<div className="home-navigation-link">
							<Link to="/timeline">Timeline</Link>
						</div>
					</div>
					<div className="home-navigation-mid-mid">
						<img src={favicon1} alt="Planet" />
					</div>
					<div className="home-navigation-mid-right">
						<div className="home-navigation-link">
							<Link to="/events">Participate</Link>
						</div>
					</div>
				</div>
				<div className="home-navigation-bottom">
					<div className="home-navigation-link">
						<Link to="/team">Team</Link>
					</div>
					<div className="home-navigation-link">
						<Link to="/contact">Contact Us</Link>
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
			<div
				className="home-buttons"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<Button
					className="home-button"
					text="Participate"
					containsLink
					link="/events"
					color="tertiary"
				/>
				<Button
					className="home-button"
					text="Download Brochure"
					containsHref
					href={brochure}
					color="tertiary"
				/>
			</div>
			<ScrollToTop />
		</section>
	);
};

export default Home;
