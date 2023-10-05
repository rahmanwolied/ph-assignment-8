import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import DonationsAPIContext from '../contexts/DonationsAPIContext';
import LocalDonationsContext from '../contexts/LocalDonationsContext';
const Details = () => {
	const { id } = useParams();
	const [local, setLocal] = useContext(LocalDonationsContext);

	const items = useContext(DonationsAPIContext);
	const item = items.find((item) => item.id === parseInt(id));
	const { picture, title, text_button_bg, price, description } = item;

	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (local.includes(item)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [local, item]);

	const btnStyle = {
		backgroundColor: text_button_bg,
	};

	const handleClick = () => {
		if (local.includes(item)) {
			toast.error('You already donated to this cause!');
			return;
		}
		const newDonations = [...local, item];
		const donations = JSON.parse(localStorage.getItem('donations'));
		if (donations) {
			localStorage.setItem('donations', JSON.stringify([...donations, id]));
		} else {
			localStorage.setItem('donations', JSON.stringify([id]));
		}
		toast.success(`You donated $${price}!`);
		setLocal(newDonations);
		console.log(newDonations);
		console.log(localStorage.getItem('donations'));
	};

	return (
		<div className="max-w-screen-lg mx-auto ">
			<div className="relative">
				<img src={picture} alt="" className="w-full " />
				<div className="absolute w-full bottom-0 p-8 bg-[#00000099]">
					<button onClick={handleClick} className={(disabled ? 'btn-disabled' : '') + ' btn border-none text-white'} style={btnStyle}>
						{!disabled ? `Donate $${price}` : 'Donated'}
					</button>
				</div>
			</div>
			<h1 className="text-3xl font-semibold my-10">{title}</h1>
			<p className="mb-20">{description}</p>
		</div>
	);
};

export default Details;
