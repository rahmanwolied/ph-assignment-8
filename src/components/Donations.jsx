import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';
import { useState } from 'react';

const Donations = () => {
	const [showAll, setShowAll] = useState(false);

	let items = useLoaderData();
	if (!showAll) {
		items = items.slice(0, 4);
	}

	return (
		<>
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
		</>
	);
};

export default Donations;
