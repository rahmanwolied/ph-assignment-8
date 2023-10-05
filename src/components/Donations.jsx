import DonationCard from './DonationCard';
import { useContext, useEffect, useState } from 'react';
import LocalDonationsContext from '../contexts/LocalDonationsContext';

const Donations = () => {
	const [showAll, setShowAll] = useState(false);
	const [disabled, setDisabled] = useState(true);
	let [local, setLocal] = useContext(LocalDonationsContext);
	const [donations, setDonations] = useState(local);

	console.log(local);
	useEffect(() => {
		if (!showAll) {
			setDonations(local.slice(0, 4));
		} else {
			setDonations(local);
		}
		if (local.length <= 4) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [showAll, local]);

	if (local.length === 0) {
		return (
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-2xl">You dont have any donations yet.</h1>
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-col gap-3">
				<div className="max-w-screen-2xl mx-auto gap-6 grid md:grid-cols-2 lg:grid-cols-2 my-10">
					{donations.map((item, index) => {
						return <DonationCard key={index} item={item} setLocal={setLocal} />;
					})}
				</div>
				{showAll && (
					<button onClick={() => setShowAll(false)} className=" btn mx-auto bg-green-500 text-white ">
						Show Less
					</button>
				)}
				{!showAll && (
					<button onClick={() => setShowAll(true)} className={(disabled ? 'btn-disabled' : '') + ' btn mx-auto bg-green-500 text-white '}>
						Show All
					</button>
				)}
			</div>
		</>
	);
};

export default Donations;
