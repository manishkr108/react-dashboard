import React,{useState} from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name: 'Sales',
                data: [30, 40, 28, 50, 82, 98],
            },
            {
                name: 'Revenue',
                data: [30, 11, 28, 61, 82, 10],
            },
            {
                name: 'Customers',
                data: [30, 11, 28, 81, 18, 10],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'], // Correctly formatted color codes
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    gradientToColors: ['#4154f1', '#2eca6a', '#ff771d'], // Optional gradient end colors
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    shadeIntensity:1,
                },
            },
            stroke: {
                show: true,
                curve: 'smooth', // Options: 'smooth', 'straight', 'stepline'
                width: 2,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Customize x-axis labels
                title: {
                    text: 'Months',
                },
            },
            tooltip: {
                enabled: true,
                theme: 'dark', // Options: 'dark', 'light'
                x: {
                    show: true,
                },
                y: {
                    formatter: (val) => `$${val}`, // Customize tooltip values
                },
            },
            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#000'], // Text color for data labels
                },
            },
        },
    });
  return (
    <Chart 
    options={data.options}
    series={data.series}
    type= {data.options.chart.type}
    height={data.options.chart.height}
    />
  )
}

export default ReportCharts