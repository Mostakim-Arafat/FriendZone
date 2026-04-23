import React from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import { Tooltip } from 'recharts';
import { Label } from 'recharts';


const Chart = ({ collection }) => {
    const call = collection.filter(i => i.mode === 'call')
    const text = collection.filter(i => i.mode === 'text')
    const video = collection.filter(i => i.mode === 'video')


    const data = [
        { name: 'Calls', value: call.length, color: '#000000' },
        { name: 'Texts', value: text.length, color: '#22C55E' },
        { name: 'Videos', value: video.length, color: '#EF4444' },
    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"

            //isAnimationActive={true}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                    value={`${collection.length} Total`}
                    position="center"
                    className="font-bold text-lg" // You can use Tailwind classes!
                    fill="#333"
                />
            </Pie>
            <Tooltip />
        </PieChart>
    );
}

export default Chart;

