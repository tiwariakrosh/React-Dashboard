import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Subscription({ title, data, dataKey, grid }) {
    return (
        <div>
            <div className='chart'>
                <h3 className="chart_title">
                    {title}
                </h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey='package' stroke="#5550db" />
                        <Line type={"monotone"} dataKey={dataKey} stroke="#5550db" />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="6 6" />}
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>  
        </div>
    )
}
