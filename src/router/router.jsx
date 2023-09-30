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
						loader: () => fetch('/data/data.json'),
					},
					{
						path: '/donations',
						element: <Donations />,
						loader: async () => {
							const Ids = JSON.parse(localStorage.getItem('donations')) ? JSON.parse(localStorage.getItem('donations')) : [];
							const fetc = await fetch('/data/data.json');
							const info = await fetc.json();
							let filtered = info.filter((item) => {
								return Ids.includes(item.id);
							});
							return filtered;
						},
					},
					{
						path: '/statistics',
						element: <Statistics />,
						loader: () => fetch('/data/data.json'),
					},
				],
			},
		],
	},
]);

export default router;
