import { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
	let [data, setData] = useState(null);
	useEffect(() => {
		fetch('./../../public/data/data.json')
			.then((info) => info.json())
			.then((info) => {
				setData(info);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-screen-xl gap-6 mx-auto">
			{data &&
				data.map((item) => {
					return <Card key={item.id} item={item}></Card>;
				})}
		</div>
	);
};

export default Cards;
