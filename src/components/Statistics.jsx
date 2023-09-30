import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';

const Statistics = () => {
	const data = useLoaderData();
	const donations = JSON.parse(localStorage.getItem('donations'));
	const totalLength = data.length;
	const donationsLength = donations.length;
	return (
		<div className="flex justify-center items-center">
			<div className="w-96 my-20">
				<PieChart width={730} height={250}>
					<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
					<Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
				</PieChart>
			</div>
		</div>
	);
};

export default Statistics;
