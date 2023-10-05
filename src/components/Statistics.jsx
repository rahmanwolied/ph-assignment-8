import { useContext } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import DonationsAPIContext from '../contexts/DonationsAPIContext';
import LocalDonationsContext from '../contexts/LocalDonationsContext';

const COLORS = ['#00C49F', '#FF444A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
export default function Statistics() {
	const allDonations = useContext(DonationsAPIContext);
	const donated = useContext(LocalDonationsContext)[0];
	console.log(allDonations.length, donated.length);
	const data = [
		{ name: 'Your Donations', value: donated.length },
		{ name: 'Total Donations', value: allDonations.length - donated.length },
	];
	return (
		<div className="flex justify-center">
			<PieChart width={1000} height={400}>
				<Pie data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={100} fill="#8884d8" dataKey="value" legendType="rect">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Legend iconType="plainline" iconSize={100} width="100%" layout="horizontal" />
			</PieChart>
		</div>
	);
}
