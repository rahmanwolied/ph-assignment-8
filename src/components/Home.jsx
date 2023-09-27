import Banner from './Banner';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
	return (
		<div className="relative header">
			<div className="relative z-10">
				<Navbar></Navbar>
				<Banner></Banner>
			</div>
			<div className="bg-white absolute top-0 bottom-0 left-0 right-0 opacity-95 z-0"></div>
		</div>
	);
};

export default Home;
