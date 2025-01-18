import React from 'react';

const DashboardHome = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="p-6" id="dashboard_home">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" id="el-jaew3tkq">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/30 col-span-2" id="el-z5zzg3dl">
          <div className="flex items-center justify-between mb-4" id="el-sdalsu54">
            <div id="el-tb91gv9n">
              <h3 className="text-2xl font-bold text-gray-800" id="el-z3hs9dfu">Welcome back, John</h3>
              <p className="text-gray-600" id="el-wdgcjfib">Your spiritual journey continues</p>
            </div>
            <div className="text-right" id="el-dco9grp5">
              <p className="text-sm text-gray-600" id="el-w94yjhcc">Today's Date</p>
              <p className="text-lg font-semibold text-gray-800" id="currentDate">{currentDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" id="el-3vj09z5p">
            {[
              { title: 'Lucky Number', value: '7', color: 'indigo' },
              { title: 'Lucky Color', value: 'Blue', color: 'purple' },
              { title: 'Lucky Direction', value: 'North', color: 'rose' },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-${item.color}-50 p-4 rounded-lg border border-${item.color}-100`}
                id={`el-${index}`}
              >
                <h4 className={`text-${item.color}-600 font-semibold`} id={`el-title-${index}`}>{item.title}</h4>
                <p className={`text-2xl font-bold text-${item.color}-700`} id={`el-value-${index}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-p7wlkb88">
          <h3 className="text-lg font-semibold text-gray-800 mb-4" id="el-t5hu53pt">Quick Actions</h3>
          <div className="space-y-3" id="el-jabeakuh">
            {['Generate Birth Chart', 'View Horoscope', 'Start Meditation'].map((action, index) => (
              <button
                key={index}
                className={`w-full bg-indigo-50 text-indigo-600 p-3 rounded-lg border border-indigo-100 text-left hover:bg-indigo-100 transition-colors`}
                id={`el-action-${index}`}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" id="el-29cp9efu">
        {[
          {
            title: 'Daily Ritual',
            description: 'Perform Surya Namaskar at sunrise',
            iconColor: 'amber',
            iconPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
          },
          {
            title: 'Gemstone Recommendation',
            description: 'Wear on middle finger for enhanced wisdom',
            iconColor: 'emerald',
            iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
          },
          {
            title: "Today's Meditation",
            description: '15 minutes guided session',
            iconColor: 'blue',
            iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-neutral-200/30" id={`el-insight-${index}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4" id={`el-title-${index}`}>{item.title}</h3>
            <div className="flex items-start gap-4" id={`el-content-${index}`}>
              <div
                className={`w-12 h-12 bg-${item.iconColor}-50 rounded-full flex items-center justify-center`}
                id={`el-icon-${index}`}
              >
                <svg className={`w-6 h-6 text-${item.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath}></path>
                </svg>
              </div>
              <div id={`el-description-${index}`}>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200/30 mb-6" id="el-b4eh4iol">
        <h3 className="text-lg font-semibold text-gray-800 mb-4" id="el-n5m2ekfj">Upcoming Auspicious Events</h3>
        <div className="overflow-x-auto" id="el-vq76zs1l">
          <table className="w-full" id="el-0e9cweuo">
            <thead id="el-pxopv87p">
              <tr className="border-b border-neutral-200/30">
                <th className="text-left py-3 px-4 text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-gray-600">Event</th>
                <th className="text-left py-3 px-4 text-gray-600">Recommended Activity</th>
              </tr>
            </thead>
            <tbody id="el-p4qsnpww">
              {[
                { date: 'June 15, 2024', event: 'Full Moon', activity: 'Meditation & Prayer' },
                { date: 'June 21, 2024', event: 'Summer Solstice', activity: 'Surya Namaskar' },
              ].map((item, index) => (
                <tr key={index} className="border-b border-neutral-200/30">
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">{item.event}</td>
                  <td className="py-3 px-4">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
