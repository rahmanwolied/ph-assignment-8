import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import DonationsAPIContext from '../contexts/DonationsAPIContext';
import { useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cards = () => {
	const data = useContext(DonationsAPIContext);
	const search = useOutletContext()[0];
	const [homeScreenDonations, setHomeScreenDonations] = useState(data);
	useEffect(() => {
		const filteredDonations = data.filter((item) => {
			return item.category.toLowerCase() === search.toLowerCase();
		});
		if (filteredDonations.length > 0) {
			setHomeScreenDonations(filteredDonations);
			toast.success(`Showing ${filteredDonations.length} ${search} donations`);
		} else if (search === '') {
			setHomeScreenDonations(data);
		} else if (filteredDonations.length === 0) {
			toast.error('No category found!');
		}
	}, [search, data]);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-screen-xl gap-6 mx-auto">
			{homeScreenDonations.map((item) => {
				return <Card key={item.id} item={item}></Card>;
			})}
		</div>
	);
};

export default Cards;
