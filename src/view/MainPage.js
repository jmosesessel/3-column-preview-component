import React from "react";
import Card from "../components/Card";
export default function MainPage() {
	const cardContent = [
		{
			className: "sedan-bg",
			icon: "icon-sedans.svg",
			title: "Sedans",
			content:
				"Choose a sedan for its affordability and excellent fuel economy. Ideal fo cruising in the city or on your next road trip",
			buttonLink: "#",
		},
		{
			className: "suv-bg",
			icon: "icon-suvs.svg",
			title: "Suvs",
			content:
				"Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-rad adventures.",
			buttonLink: "#",
		},
		{
			className: "luxury-bg",
			icon: "icon-luxury.svg",
			title: "Luxury",
			content:
				"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
			buttonLink: "#",
		},
	];

	const cardComponent = cardContent.map((item, index) => {
		console.log("card item", item);
		return <Card item={item} />;
	});

	return (
		<main>
			<div className="main-wrap">
				<div className="main-wrap__content">{cardComponent}</div>
			</div>
		</main>
	);
}
