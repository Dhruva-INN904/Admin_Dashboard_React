import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <h1 className="h2">Dhruva Kumar</h1>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="dashboard-card bg-red">
                        <h5>Daily Visits</h5>
                        <h2>16,150</h2>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="dashboard-card bg-orange">
                        <h5>Sales</h5>
                        <h2>25,550</h2>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="dashboard-card bg-blue">
                        <h5>Comments</h5>
                        <h2>11,225</h2>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="dashboard-card bg-green">
                        <h5>No. of Visits</h5>
                        <h2>72,525</h2>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body1">
                            <h5 className="card-title">Profit</h5>
                            <Doughnut data={{
                                datasets: [{
                                    data: [75, 25],
                                    backgroundColor: ['#007bff', '#e9ecef']
                                }]
                            }} options={{
                                cutout: '80%',
                                plugins: {
                                    tooltip: { enabled: false },
                                    legend: { display: false }
                                }
                            }} />
                            <div className="chart-percentage">75%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body1">
                            <h5 className="card-title">No. of Visits</h5>
                            <Doughnut data={{
                                datasets: [{
                                    data: [46, 54],
                                    backgroundColor: ['#dc3545', '#e9ecef']
                                }]
                            }} options={{
                                cutout: '80%',
                                plugins: {
                                    tooltip: { enabled: false },
                                    legend: { display: false }
                                }
                            }} />
                            <div className="chart-percentage">46%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body1">
                            <h5 className="card-title">Customers</h5>
                            <Doughnut data={{
                                datasets: [{
                                    data: [84, 16],
                                    backgroundColor: ['#28a745', '#e9ecef']
                                }]
                            }} options={{
                                cutout: '80%',
                                plugins: {
                                    tooltip: { enabled: false },
                                    legend: { display: false }
                                }
                            }} />
                            <div className="chart-percentage">84%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body1">
                            <h5 className="card-title">Sales</h5>
                            <Doughnut data={{
                                datasets: [{
                                    data: [55, 45],
                                    backgroundColor: ['#ffc107', '#e9ecef']
                                }]
                            }} options={{
                                cutout: '80%',
                                plugins: {
                                    tooltip: { enabled: false },
                                    legend: { display: false }
                                }
                            }} />
                            <div className="chart-percentage">55%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Combined Data</h5>
                            <div className="chart-container">
                                <Bar data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                    datasets: [{
                                        type: 'line',
                                        label: 'Line Data',
                                        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 85],
                                        borderColor: 'rgba(75, 192, 192, 1)',
                                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                        fill: false,
                                        tension: 0.1
                                    }, {
                                        type: 'bar',
                                        label: 'Bar Data',
                                        data: [28, 48, 40, 19, 86, 27, 90, 60, 65, 75, 80, 95],
                                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                        borderColor: 'rgba(255, 99, 132, 1)',
                                        borderWidth: 1
                                    }]
                                }} options={{
                                    responsive: true,
                                    scales: {
                                        x: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Month'
                                            }
                                        },
                                        y: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Value'
                                            }
                                        }
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
