import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';
import { useEffect, useState } from 'react';

const Donations = () => {
	const [showAll, setShowAll] = useState(false);
	let [items, setItems] = useState([]);

	let donations = useLoaderData();
	setItems(donations);

	let items = useLoaderData();
	if (items.length === 0) {
		return (
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-2xl">You dont have any donations yet.</h1>
			</div>
		);
	}
	if (!showAll) {
		donations = donations.slice(0, 4);
		setItems(donations);
	}

	return (
		<>
			<div className="flex flex-col gap-3">
				<div className="max-w-screen-lg mx-auto gap-6 grid md:grid-cols-2 lg:grid-cols-2 my-10">
					{items.map((item, index) => {
						return <DonationCard key={index} item={item} />;
					})}
				</div>
				{showAll && (
					<button onClick={() => setShowAll(false)} className="btn mx-auto bg-green-500 text-white">
						Show Less
					</button>
				)}
				{!showAll && (
					<button onClick={() => setShowAll(true)} className="btn mx-auto bg-green-500 text-white`">
						Show All
					</button>
				)}
			</div>
		</>
	);
};

export default Donations;
