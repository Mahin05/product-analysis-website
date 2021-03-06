import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css'

const Chart = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ];

    return (
        <div className='rechart-style'>
            <h2>Month wise sell</h2>
            <LineChart className='pos-set' width={400} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
            <h2>Investments vs revenue</h2>
            <BarChart className='pos-set'  width={400} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a"  fill="#82ca9d" />
            </BarChart>
        </div>

    );
};

export default Chart;