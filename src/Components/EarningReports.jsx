import React from 'react'

const EarningReports = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Earning Reports</h2>
        <p className="text-2xl font-bold mt-4">$468</p>
        <p className="text-green-400 text-sm mt-1">+4.2% compared to last week</p>
  
        {/* Bar Chart */}
        <div className="flex items-end space-x-2 mt-6">
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, index) => (
            <div key={index} className="text-center">
              <div className={`bg-indigo-600 ${day === 'Fr' ? 'h-16' : 'h-10'} w-6 rounded`}></div>
              <p className="text-xs mt-2">{day}</p>
            </div>
          ))}
        </div>
  
        {/* Earnings Details */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-400">Earnings</p>
            <p className="text-xl font-bold">$545.69</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Profit</p>
            <p className="text-xl font-bold">$256.34</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Expense</p>
            <p className="text-xl font-bold text-red-400">$74.19</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EarningReports;
  
