import React from "react";
import CardContent from "./CardContent";

export default function Card(props) {
	return (
		<div className="card-wrap">
			<div className={"card-wrap--" + props.item.className}>
				<CardContent item={props.item} />
			</div>
		</div>
	);
}
