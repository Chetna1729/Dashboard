import React from 'react'

const SupportTracker = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Support Tracker</h2>
        <p className="text-2xl font-bold mt-4">164</p>
        <p className="text-sm text-gray-400">Total Tickets</p>
  
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
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-xl font-bold">85%</span>
            </div>
          </div>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500">
            Buy Now
          </button>
        </div>
      </div>
    );
  };
  
  export default SupportTracker;
  
