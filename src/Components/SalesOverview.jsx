import React from "react";
const SalesOverview = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Sales Overview</h2>
        <p className="text-2xl font-bold mt-4">$42.5k</p>
        <p className="text-sm text-green-400">+18.2%</p>
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-bold">62.2%</p>
              <p className="text-gray-400">Order</p>
            </div>
            <div>
              <p className="font-bold">25.5%</p>
              <p className="text-gray-400">Visits</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '62%' }}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SalesOverview;
  