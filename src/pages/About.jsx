import React, { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import about3 from "../images/about3.jpg";

const About = () => {
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	return (
		<section className="about">
			<div className="about-head">
				<span className="about-head-head">About Aavesh</span>
			</div>
			<div className="about-body">
				<div className="about-body-container">
					<div className="about-body-image">
						<img
							className="about-body-image__img"
							src={about1}
							alt="About aavesh"
						/>
					</div>
					<div className="about-body-content">
						Aavesh is the core electronics society of IIITU that
						strives to teach and help students acquire new skills in
						an era of rapidly evolving technology in the field of
						electronics and communication engineering. The Society
						aims to provide potential minds of IIITU a platform to
						discuss innovative ideas and nurture their skills to
						tackle real life challenges in the world today and
						contribute to the technical society through various
						projects, patents and research publications.
					</div>
				</div>
				<div className="about-body-container">
					<div className="about-body-image">
						<img
							className="about-body-image__img"
							src={about2}
							alt="About aavesh"
						/>
					</div>
					<div className="about-body-content">
						We organize various expert lectures, workshops,
						mentorship programs as well as competitions throughout
						the year with the aim of keeping the students learning
						and providing them the necessary resources to implement
						their ideas.
					</div>
				</div>
			</div>
			<div className="about-head">
				<span className="about-head-head">About TECHतत्त्व:</span>
			</div>
			<div className="about-body">
				<div className="about-body-container">
					<div className="about-body-image">
						<img
							className="about-body-image__img"
							src={about3}
							alt="About TECHतत्त्व:"
						/>
					</div>
					<div className="about-body-content">
						Techtatva is the technical and social event conducted by
						AAVESH, IIIT Una. It marks days of absolute ecstasy
						providing participants a competing platform in
						technical, non-technical and some fun events.
					</div>
				</div>
				<div className="about-body-container">
					<div className="about-body-image">
						<img
							className="about-body-image__img"
							src={about3}
							alt="About TECHतत्त्व:"
						/>
					</div>
					<div className="about-body-content">
						It is an avenue to be comforted from the routine life
						and to embrace the fun. Planned as a ‘for the students,
						of the students, by the students’ event, the festival is
						the most awaited event of the year.
					</div>
				</div>
				<div className="about-body-container">
					<div className="about-body-image">
						<img
							className="about-body-image__img"
							src={about3}
							alt="About TECHतत्त्व:"
						/>
					</div>
					<div className="about-body-content">
						To promote Science, Technology, Engineering and
						Mathematics (STEM) activities to young people and the
						wider community.
						<ul
							style={{
								fontSize: "1rem",
								lineHeight: "1.25rem",
							}}
						>
							<li>
								A quality inclusive working environment which is
								responsive to a member's voice
							</li>
							<li>
								Learning from the past mistakes and working
								together as a team for the betterment of the
								institution.{" "}
							</li>
							<li>
								Setting an ideal "benchmark” for the coming year
								students regarding managing vital events of our
								institute.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<ScrollToTop />
		</section>
	);
};

export default About;
