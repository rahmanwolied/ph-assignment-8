import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
	const { id, picture, category, title, card_bg, text_button_bg, category_bg } = item;
	const divStyle = {
		backgroundColor: card_bg,
	};
	const categoryStyle = {
		color: text_button_bg,
		backgroundColor: category_bg,
	};
	const titleStyle = {
		color: text_button_bg,
	};
	return (
		<Link to={`/${id}`} style={divStyle} className="rounded-lg hover:cursor-pointer">
			<img src={picture} alt="" className="w-full" />
			<div className="p-5">
				<h1 style={categoryStyle} className="text-sm p-2 my-1 inline-block rounded-md">
					{category}
				</h1>
				<h1 style={titleStyle} className="font-semibold text-xl">
					{title}
				</h1>
			</div>
		</Link>
	);
};

export default Card;
