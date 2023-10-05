import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../components/Home';
import Details from '../components/Details';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Donations from '../components/Donations';
import Statistics from '../components/Statistics';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: async () => {
					try {
						const data = await fetch('/data/data.json');
						const donations = await data.json();
						const Ids = JSON.parse(localStorage.getItem('donations')) ? JSON.parse(localStorage.getItem('donations')) : [];
						const localDonations = donations.filter((item) => {
							return Ids.includes(item.id.toString());
						});
						return { donations, localDonations };
					} catch (error) {
						return error;
					}
				},
				children: [
					{
						path: '/',
						element: (
							<>
								<Banner />
								<Cards />
							</>
						),
					},
					{
						path: '/:id',
						element: <Details />,
					},
					{
						path: '/donations',
						element: <Donations />,
					},
					{
						path: '/statistics',
						element: <Statistics />,
					},
				],
			},
		],
	},
]);

export default router;
