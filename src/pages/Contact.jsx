import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import SnackBar from "../components/SnackBar";
import image from "../images/contact.jpeg";

const Contact = () => {
	const [show, setShow] = useState(false);
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
	}, []);
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setUser({
			name: "",
			email: "",
			message: "",
		});
		console.log(user);
		try {
			const newUser = await axios.post(
				"https://myownrestfullapi.herokuapp.com/sendmail",
				user
			);
		} catch (error) {
			console.log(error);
		}
		setShow(true);
		setTimeout(() => {
			setShow(false);
		}, 2500);
	};
	return (
		<section
			className="contact"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="contact-box">
				<div className="contact-container">
					<div className="contact-head">Contact Us</div>
					<form className="contact-form" onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={user.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={user.email}
							onChange={handleChange}
						/>
						<textarea
							name="message"
							placeholder="Your message here"
							value={user.message}
							onChange={handleChange}
							required
						></textarea>
						<Button
							text="Submit Response"
							type={"submit"}
							color="tertiary"
							style={{ color: "var(--bgcolor)" }}
						/>
					</form>
				</div>
			</div>
			{show && <SnackBar text="Response Submitted" delayTime={2500} />}
		</section>
	);
};

export default Contact;
