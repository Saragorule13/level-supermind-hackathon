import React from "react";

const ReportsAnalytics = () => {
  return (
    <section id="reports_analytics" className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-7xl mx-auto" id="el-018ok3dt">
        {/* Header */}
        <div className="mb-8" id="el-an3fliy5">
          <h2 className="text-3xl font-bold mb-2" id="el-e1ue1dro">
            Reports &amp; Analytics
          </h2>
          <p className="text-neutral-400" id="el-xiovt57w">
            Track your spiritual journey and insights
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" id="el-07mfga7z">
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-8me9ogu0">
            <h3 className="text-lg font-semibold mb-2" id="el-0qbzjbss">Daily Predictions</h3>
            <p className="text-3xl font-bold text-emerald-500" id="el-lzywrtl6">89%</p>
            <p className="text-sm text-neutral-400" id="el-2h3jqtai">Accuracy rate</p>
          </div>
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-j5x02plf">
            <h3 className="text-lg font-semibold mb-2" id="el-spt5tecb">Rituals Completed</h3>
            <p className="text-3xl font-bold text-blue-500" id="el-0shzid4q">24</p>
            <p className="text-sm text-neutral-400" id="el-ty7pvnzm">Last 30 days</p>
          </div>
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-7nf15zke">
            <h3 className="text-lg font-semibold mb-2" id="el-co1qrgzh">Meditation Hours</h3>
            <p className="text-3xl font-bold text-purple-500" id="el-qccdzmjb">12.5</p>
            <p className="text-sm text-neutral-400" id="el-parjcsr8">This month</p>
          </div>
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-f6uwu5f3">
            <h3 className="text-lg font-semibold mb-2" id="el-kq52bbyb">Chat Sessions</h3>
            <p className="text-3xl font-bold text-yellow-500" id="el-x4w9wnf8">45</p>
            <p className="text-sm text-neutral-400" id="el-b9cwr7vo">Total interactions</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="el-eqspg32m">
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-avbrazcu">
            <h3 className="text-xl font-semibold mb-4" id="el-tvsfi0z7">Recent Activities</h3>
            <div className="space-y-4" id="el-ke6thcgi">
              <div className="flex items-center p-3 bg-neutral-700/30 rounded-lg" id="el-5i1w1u40">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4" id="el-bnkhvier">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-4f58b6cr">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      id="el-lr7y0v7k"
                    ></path>
                  </svg>
                </div>
                <div id="el-hbq3ik8f">
                  <p className="font-medium" id="el-c6c69vlr">Morning Meditation</p>
                  <p className="text-sm text-neutral-400" id="el-gmctazt7">Completed 20 minutes session</p>
                </div>
                <span className="ml-auto text-sm text-neutral-400" id="el-2xl0dirp">2h ago</span>
              </div>
              {/* Add similar sections for other activities */}
            </div>
          </div>

          {/* Upcoming Recommendations */}
          <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700/30" id="el-us5eaae7">
            <h3 className="text-xl font-semibold mb-4" id="el-olig1j3k">Upcoming Recommendations</h3>
            <div className="space-y-4" id="el-knutan96">
              <div className="p-4 bg-neutral-700/30 rounded-lg" id="el-4mg7q7b0">
                <div className="flex justify-between items-center mb-2" id="el-6khg75qj">
                  <h4 className="font-semibold text-yellow-400" id="el-t3rehqmb">Solar Eclipse Ritual</h4>
                  <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded" id="el-p8izoof4">High Priority</span>
                </div>
                <p className="text-sm text-neutral-400 mb-2" id="el-fefv95n2">Recommended ritual during upcoming solar eclipse for maximum spiritual benefits</p>
                <p className="text-sm text-neutral-500" id="el-tbinoxd7">Tomorrow, 6:30 AM</p>
              </div>
              {/* Add similar sections for other recommendations */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAnalytics;
