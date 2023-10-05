import Navbar from './Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DonationsAPIContext from '../contexts/DonationsAPIContext';
import LocalDonationsContext from '../contexts/LocalDonationsContext';

const Home = () => {
	const { donations, localDonations } = useLoaderData();
	const [local, setLocal] = useState(localDonations);
	const [donationSearch, setDonationSearch] = useState('');

	useEffect(() => {
		setLocal(localDonations);
	}, [localDonations]);
	return (
		<>
			<div className="relative">
				<div className="relative z-10">
					<Navbar></Navbar>
				</div>
			</div>
			<DonationsAPIContext.Provider value={donations}>
				<LocalDonationsContext.Provider value={[local, setLocal]}>
					<Outlet context={[donationSearch, setDonationSearch]}></Outlet>
				</LocalDonationsContext.Provider>
			</DonationsAPIContext.Provider>
		</>
	);
};

export default Home;
