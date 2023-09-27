import Banner from './Banner';
import Navbar from './Navbar';
import Cards from './Cards';
import { Outlet } from 'react-router-dom';
const Home = () => {
	return (
		<>
			<div className="relative">
				<div className="relative z-10">
					<Navbar></Navbar>
				</div>
			</div>
			<Outlet></Outlet>
		</>
	);
};

export default Home;
