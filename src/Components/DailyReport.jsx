import React from 'react'

const DailyReport = () => {
    return (
      <div>
        {/* Title */}
        <h2 className="text-lg font-bold">Average Daily Sales</h2>
  
        {/* Monthly Sales */}
        <p className="text-2xl font-bold mt-4">$28,450</p>
        <p className="text-gray-400 text-sm mt-1">Total Sales This Month</p>
  
        {/* Sales Graph */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-400">Sales Growth</p>
          </div>
          <div className="mt-4">
            {/* Example graph placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-24 text-green-400"
              fill="none"
              viewBox="0 0 100 50"
              stroke="currentColor"
            >
              <polyline
                points="0,40 20,30 40,20 60,25 80,10 100,20"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default DailyReport;
  
