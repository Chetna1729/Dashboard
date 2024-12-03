import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Earning Reports Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-lg font-bold mb-4">Earning Reports</h2>
          <p className="text-3xl font-bold">$468</p>
          <p className="text-green-400 text-sm mt-1">+4.2% compared to last week</p>

          {/* Bar Chart */}
          <div className="flex items-end space-x-2 mt-6">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, index) => (
              <div key={index} className="text-center">
                <div
                  className={`bg-indigo-600 ${
                    day === 'Fr' ? 'h-16' : 'h-10'
                  } w-6 rounded`}
                ></div>
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

        {/* Support Tracker Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-lg font-bold mb-4">Support Tracker</h2>
          <p className="text-3xl font-bold mb-4">164</p>
          <p className="text-sm text-gray-400">Total Tickets</p>

          {/* Ticket Status */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-400">New Tickets</p>
              <p className="text-xl font-bold">142</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Open Tickets</p>
              <p className="text-xl font-bold">28</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Response Time</p>
              <p className="text-xl font-bold">1 Day</p>
            </div>
          </div>

          {/* Completion Gauge */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-xl font-bold">85%</span>
                </div>
              </div>
              <p className="ml-4">Completed Tasks</p>
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
