import React from 'react'
import {Pie,Bar} from 'react-chartjs-2';

const PieChartData = {
    labels: [
        'Deals',
        'Sells',
        'Vendors'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};
const Bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Quotes',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className="ChartDiv">
                    <Pie  data={PieChartData} options={{ responsive: true }} />
                </div>
                <br/>
                <div className="ChartDiv ChartDivBar">
                    <Bar
                        data={Bardata}
                        options={{
                            responsive: true
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Dashboard