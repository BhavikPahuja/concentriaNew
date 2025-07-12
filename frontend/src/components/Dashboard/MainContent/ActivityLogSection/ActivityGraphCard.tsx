import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const graphData = [ 
  { name: 'Permission', value: 1 },
  { name: 'Storage', value: 0 },
  { name: 'Cookies', value: 1 },
  { name: 'Downloads', value: 0 },
];

function ActivityGraphCard() {
  return (
    <div className="bg-gray-800 text-gray-200 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="flex items-center mb-5 justify-center">
        <h2 className="text-xl font-semibold text-white">Activity Log</h2>
      </div>
      <div className="h-60 mb-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graphData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#888" />
            <YAxis hide={true} domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px' }}
              labelStyle={{ color: '#eee' }}
              itemStyle={{ color: '#00C9A7' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00C9A7"
              strokeWidth={3}
              dot={{ r: 5, fill: '#00C9A7', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 8, fill: '#00C9A7', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around pt-4 border-t border-gray-700">
        {graphData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-sm">
            <span className="text-gray-400">{item.name}</span>
            <strong className="text-white text-lg mt-1">{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityGraphCard;