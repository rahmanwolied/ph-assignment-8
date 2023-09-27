import './Banner.css';
const Banner = () => {
	return (
		<div className="header hero relative">
			<div className="hero-content flex justify-center items-center flex-col gap-10 py-32">
				<h1 className="text-5xl font-bold">I grow by helping people in Need</h1>
				<div className="form-control">
					<label className="input-group">
						<input type="text" placeholder="Search here..." className="input input-bordered w-full" />
						<button className="hover:bg-[#3b71a3] bg-[#FF444A] text-white btn">Search</button>
					</label>
				</div>
			</div>
			<div className="hero-overlay bg-white bg-opacity-95"></div>
		</div>
	);
};

export default Banner;
