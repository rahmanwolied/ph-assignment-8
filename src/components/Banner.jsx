import './Banner.css';
import { useOutletContext } from 'react-router-dom';

const Banner = () => {
	const setDonationSearch = useOutletContext()[1];

	const handleSubmit = (e) => {
		e.preventDefault();
		setDonationSearch(e.target.elements.search.value);
	};

	return (
		<div className="header hero relative">
			<div className="hero-content flex justify-center items-center flex-col gap-10 py-32">
				<h1 className="text-5xl font-bold">I grow by helping people in Need</h1>
				<div className="form-control">
					<form onSubmit={handleSubmit} className="form-control">
						<label className="input-group">
							<input type="text" name="search" placeholder="Search here..." className="input input-bordered w-full" />
							<button className="hover:bg-[#3b71a3] bg-[#FF444A] text-white btn">Search</button>
						</label>
					</form>
				</div>
			</div>
			<div className="hero-overlay bg-white bg-opacity-95"></div>
		</div>
	);
};

export default Banner;
