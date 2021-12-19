import React from "react";
import favicon from "../images/favicon.png";
import iiitu from "../images/iiitu.gif";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<div className="header-left-logo">
					<Link to="/">
						<img className="header-left-logo__img" src={favicon} alt="Techtatva" />
					</Link>
				</div>
				<div className="header-left-logo">
					<a href="https://iiitu.ac.in">
						<img className="header-left-logo__img" src={iiitu} alt="IIITU" />
					</a>
				</div>
			</div>
			<div className="header-right">
				<nav className="header-right-nav">
					<ul className="header-right-nav__ul">
						<li className="header-right-nav__li">
							<Link to="/" className="header-right-nav__link">
								Home
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link to="/about" className="header-right-nav__link">
								About
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link to="/events" className="header-right-nav__link">
								Events
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link to="/team" className="header-right-nav__link">
								Team
							</Link>
						</li>
						<li className="header-right-nav__li">
							<Link to="/contact" className="header-right-nav__link">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
