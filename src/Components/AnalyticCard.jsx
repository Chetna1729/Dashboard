import React from "react";

const AnalyticCard = () => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow-lg w-96">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">Website Analytics</h3>
        <p className="text-sm">Total 28.5% Conversion Rate</p>
      </div>
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
    </div>
    <div className="flex mt-6">
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="bg-white/10 p-2 rounded-md text-center">
            <p className="text-lg font-bold">12h</p>
            <p className="text-sm">Spend</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white/10 p-2 rounded-md text-center">
            <p className="text-lg font-bold">127</p>
            <p className="text-sm">Order</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 ml-8">
        <div className="flex items-center">
          <div className="bg-white/10 p-2 rounded-md text-center">
            <p className="text-lg font-bold">18</p>
            <p className="text-sm">Order Size</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white/10 p-2 rounded-md text-center">
            <p className="text-lg font-bold">2.3k</p>
            <p className="text-sm">Items</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <img
        src="https://via.placeholder.com/150"
        alt="3D Sphere"
        className="rounded-lg"
      />
    </div>
  </div>
);

export default AnalyticCard;
