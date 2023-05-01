import React from "react";
import SedanIcon from "../assets/images/icon-sedans.svg";
import SuvIcon from "../assets/images/icon-suvs.svg";
import LuxuryIcon from "../assets/images/icon-luxury.svg";
import Button from "./Button";

export default function CardContent(props) {
	const { item } = props;
	const iconLink = item.title.toLowerCase().includes("sedan")
		? SedanIcon
		: item.title.toLowerCase().includes("suv")
		? SuvIcon
		: item.title.toLowerCase().includes("luxury")
		? LuxuryIcon
		: "";
	return (
		<div className="card-content-wrap">
			<div
				className={
					"card-content-wrap__header card-content-wrap__header--" +
					item.className
				}
			>
				<img src={iconLink} alt="" />
			</div>
			<div
				className={
					"card-content-wrap__title card-content-wrap__title--" +
					props.item.className
				}
			>
				<h2> {item.title} </h2>
			</div>
			<div
				className={
					"card-content-wrap__body card-content-wrap__body--" +
					props.item.className
				}
			>
				<p>{item.content}</p>
			</div>
			<div
				className={
					"card-content-wrap__footer card-content-wrap__footer--" +
					props.item.className
				}
			>
                <Button settings={props.item}/>
            </div>
		</div>
	);
}
