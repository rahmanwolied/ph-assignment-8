import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const DonationCard = ({ item, setLocal }) => {
	const { id, picture, category, title, card_bg, text_button_bg, category_bg, price } = item;

	const divStyle = {
		backgroundColor: card_bg,
	};
	const categoryStyle = {
		color: text_button_bg,
		backgroundColor: category_bg,
	};
	const titleStyle = {
		color: text_button_bg,
	};
	const btnStyle = {
		backgroundColor: text_button_bg,
	};

	const handleDelete = (idToDelete) => {
		const donations = JSON.parse(localStorage.getItem('donations'));
		const newDonations = donations.filter((id) => id !== idToDelete.toString());
		localStorage.setItem('donations', JSON.stringify(newDonations));
		setLocal((prev) => prev.filter((item) => item.id !== idToDelete));
		toast.success(`Donation removed! You have ${newDonations.length} ${newDonations.length === 1 ? 'donation' : 'donations'} left`);
	};
	return (
		<div style={divStyle} className="rounded-lg flex relative">
			<img src={picture} alt="" className="max-w-max rounded-lg" />
			<div className="p-5">
				<h1 style={categoryStyle} className="text-sm p-2 my-1 inline-block rounded-md">
					{category}
				</h1>
				<h1 className="font-semibold text-xl">{title}</h1>
				<h1 style={titleStyle} className="text-sm">
					${price}
				</h1>
				<Link to={`/${id}`}>
					<button style={btnStyle} className="btn text-white btn-sm mt-4 rounded-md">
						<span className="text-xs font-normal">View Details</span>
					</button>
				</Link>
			</div>
			<div className="absolute top-1 right-1">
				<h1 style={titleStyle} className="hover:scale-125" onClick={() => handleDelete(id)}>
					<AiFillCloseCircle></AiFillCloseCircle>
				</h1>
			</div>
		</div>
	);
};

DonationCard.propTypes = {
	item: PropTypes.object.isRequired,
	setLocal: PropTypes.func.isRequired,
};

export default DonationCard;
