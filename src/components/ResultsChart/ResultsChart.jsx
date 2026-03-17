import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "id": 1,
        "name": "Student A",
        "physics": 85,
        "chemistry": 78
    },
    {
        "id": 2,
        "name": "Student B",
        "physics": 92,
        "chemistry": 88
    },
    {
        "id": 3,
        "name": "Student C",
        "physics": 76,
        "chemistry": 81
    },
    {
        "id": 4,
        "name": "Student D",
        "physics": 64,
        "chemistry": 70
    },
    {
        "id": 5,
        "name": "Student E",
        "physics": 89,
        "chemistry": 91
    }
]

const myData = [
    { "x": 0, "y": -43.89628971 },
    { "x": 0.032511508, "y": -43.89921249 },
    { "x": 0.06502302, "y": -43.90306018 },
    { "x": 0.097534528, "y": -43.90722787 },
    { "x": 0.130046036, "y": -43.9109678 },
    { "x": 0.162557548, "y": -43.91356404 },
    { "x": 0.195069056, "y": -43.91449467 },
    { "x": 0.225721203, "y": -43.91366228 },
    { "x": 0.256373345, "y": -43.91129216 },
    { "x": 0.287025492, "y": -43.90771686 },
    { "x": 0.317677634, "y": -43.90340903 },
    { "x": 0.348329781, "y": -43.89892513 },
    { "x": 0.378981923, "y": -43.89481023 },
    { "x": 0.40963407, "y": -43.8915201 },
    { "x": 0.440286212, "y": -43.88939897 },
    { "x": 0.47093836, "y": -43.88866671 },
    { "x": 0.5, "y": -43.88866862 },
    { "x": 0.52906164, "y": -43.88865964 },
    { "x": 0.559713788, "y": -43.88915516 },
    { "x": 0.59036593, "y": -43.89077533 },
    { "x": 0.621018077, "y": -43.89351959 },
    { "x": 0.651670219, "y": -43.89705979 },
    { "x": 0.682322366, "y": -43.90095048 },
    { "x": 0.712974508, "y": -43.90469885 },
    { "x": 0.743626655, "y": -43.90781836 },
    { "x": 0.774278797, "y": -43.90988534 },
    { "x": 0.804930944, "y": -43.91061025 },
    { "x": 0.837442452, "y": -43.9097988 },
    { "x": 0.869953964, "y": -43.90753999 },
    { "x": 0.902465472, "y": -43.90428659 },
    { "x": 0.93497698, "y": -43.90071564 },
    { "x": 0.967488492, "y": -43.89764865 },
    { "x": 1, "y": -43.89628998 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>

                <XAxis dataKey='id'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='physics'></Line>
                <Line dataKey='chemistry' stroke='green'></Line>
            </LineChart>

            <BarChart width={500} height={500} data={resultData}>

                <XAxis dataKey='id'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='physics'></Bar>
                <Bar dataKey='chemistry' fill='green'></Bar>
            </BarChart>




            <LineChart width={1000} height={100} data={myData}>

                <XAxis dataKey='x'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='y'></Line>
            </LineChart>


        </div>
    );
};

export default ResultsChart;