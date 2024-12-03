import SideBar from './Components/SideBar';
import Header from './Components/Header';
import EarningReports from './Components/EarningReports';
import SupportTracker from './Components/SupportTracker';
import AnalyticCard from './Components/AnalyticCard';
import SalesOverview from './Components/SalesOverview';
import DailyReport from './Components/DailyReport';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 pl-6">
        {/* Header */}
        <Header />

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
          {/* Website Analytics */}
          <div className="col-span-2 bg-indigo-600 p-6 rounded-lg shadow-lg">
            <AnalyticCard />
          </div>

          {/* Average Daily Sales */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <SalesOverview />
          </div>

          {/* Daily Report */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <DailyReport />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
          {/* Earning Reports */}
          <div className="col-span-2 xl:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <EarningReports />
          </div>

          {/* Support Tracker */}
          <div className="col-span-2 xl:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <SupportTracker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
