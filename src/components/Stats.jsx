import React from 'react'
import Chart from 'react-apexcharts'

export default function Stats() {
  const series = [{ name: 'Monthly Bookings', data: [28, 40, 32, 55, 48, 70, 90, 110, 105, 130, 150, 170] }]
  const options = {
    chart: { type: 'area', toolbar: { show: false }, foreColor: '#6b7280' },
    colors: ['#2563EB'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.05, stops: [0, 90, 100] } },
    grid: { borderColor: '#e5e7eb' },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      labels: { style: { colors: '#6b7280' } },
    },
    yaxis: { labels: { style: { colors: '#6b7280' } } },
    tooltip: { theme: 'dark' }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted Growth</h2>
          <p className="mt-3 text-gray-600">Bookings and customer love keep accelerating month over month.</p>
        </div>

        <div className="mt-8 bg-white rounded-2xl ring-1 ring-gray-200 p-4">
          <Chart type="area" height={340} series={series} options={options} />
        </div>
      </div>
    </section>
  )
}
