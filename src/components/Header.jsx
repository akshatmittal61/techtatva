import React from "react";
import favicon from "../images/favicon.png";
import iiitu from "../images/iiitu.gif";
import { Link } from "react-router-dom";

const Header = ({ color, style = {} }) => {
	return (
		<header
			className="header"
			style={{
				backgroundColor: `var(--${color}-700)`,
				color: "var(--bgcolor)",
				...style,
			}}
		>
			<div className="header-left">
				<div className="header-left-logo">
					<a href="https://iiitu.ac.in">
						<img
							className="header-left-logo__img"
							src={iiitu}
							alt="IIITU"
						/>
					</a>
				</div>
				<div className="header-left-logo">
					<Link to="/">
						<img
							className="header-left-logo__img"
							src={favicon}
							alt="Techtatva"
						/>
					</Link>
				</div>
			</div>
			<div className="header-right">
				<nav className="header-right-nav">
					<ul className="header-right-nav__ul">
						<li className="header-right-nav__li">
							<Link to="/" className="header-right-nav__link">
								<span className="material-icons">home</span>
								<span className="text">Home</span>
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link
								to="/about"
								className="header-right-nav__link"
							>
								<span className="material-icons">info</span>
								<span className="text">About</span>
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link
								to="/events"
								className="header-right-nav__link"
							>
								<span className="material-icons">festival</span>
								<span className="text">Events</span>
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link to="/team" className="header-right-nav__link">
								<span className="material-icons">groups</span>
								<span className="text">Team</span>
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link
								to="/contact"
								className="header-right-nav__link"
							>
								<span className="material-icons">
									contact_support
								</span>
								<span className="text">Contact Us</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
