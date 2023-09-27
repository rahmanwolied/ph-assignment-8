import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const Details = () => {
	const { id } = useParams();
	const items = useLoaderData();
	const item = items.find((item) => item.id === parseInt(id));
	const { picture, title, text_button_bg, price, description } = item;
	const btnStyle = {
		backgroundColor: text_button_bg,
	};

	const handleClick = () => {
		let donations = localStorage.getItem('donations');
		if (!donations) {
			donations = JSON.stringify([]);
		}
		donations = JSON.parse(donations);
		donations.push(item.id);
		localStorage.setItem('donations', JSON.stringify(donations));
		toast.success(`You donated $${price}!`);
		console.log(donations);
	};

	return (
		<div className="max-w-screen-lg mx-auto ">
			<div className="relative">
				<img src={picture} alt="" className="w-full " />
				<div className="absolute w-full bottom-0 p-8 bg-[#00000099]">
					<button onClick={handleClick} className="btn border-none text-white" style={btnStyle}>{`Donate $${price}`}</button>
				</div>
			</div>
			<h1 className="text-3xl font-semibold my-10">{title}</h1>
			<p className="mb-20">{description}</p>
		</div>
	);
};

export default Details;
