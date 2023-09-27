import { PieChart } from 'react-minimal-pie-chart';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
	const data = useLoaderData();
	const donations = JSON.parse(localStorage.getItem('donations'));
	const totalLength = data.length;
	const donationsLength = donations.length;
	return (
		<div className="flex justify-center items-center">
			<div className="w-96 my-20">
				<PieChart
					data={[
						{ title: 'Your Donations', value: totalLength - donationsLength, color: '#00C49F' },
						{ title: 'Total Donations', value: donationsLength, color: '#FF444A' },
					]}
					totalValue={totalLength}
					animate={true}
					label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
				/>
			</div>
		</div>
	);
};

export default Statistics;
