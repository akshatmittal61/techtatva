import React from "react";
import { Link } from "react-router-dom";

const Button = ({
	text = "Click Me",
	color = "indigo",
	size = "normal",
	containsLink = false,
	link = "/",
	containsHref = false,
	href = "/",
	type,
	onClick = () => {
		console.log(text);
	},
	className = "btn",
	style,
}) => {
	let classes = "btn";
	if (size === "small") className += " btn-sm";
	else if (size === "large") className = " btn-lg";
	return (
		<>
			{containsLink ? (
				<Link to={link}>
					<button
						style={{
							backgroundColor: `var(--${color})`,
							...style,
						}}
						onClick={onClick}
						type={type}
						className={`${classes} ${className}`}
					>
						{text}
					</button>
				</Link>
			) : containsHref ? (
				<a href={href}>
					<button
						style={{
							backgroundColor: `var(--${color})`,
							...style,
						}}
						onClick={onClick}
						type={type}
						className={`${classes} ${className}`}
					>
						{text}
					</button>
				</a>
			) : (
				<button
					style={{
						backgroundColor: `var(--${color})`,
						...style,
					}}
					onClick={onClick}
					type={type}
					className={`${classes} ${className}`}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
