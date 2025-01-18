import React from 'react';

const Horoscope = () => {
  return (
    <div className="p-6  bg-neutral-900" id="horoscope_predictions">
      {/* Time Period Selector */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200/30 mb-6" id="el-o2oush8f">
        <div className="flex flex-wrap gap-4" id="el-ojhhnnfi">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" id="el-vvrboxdu">Daily</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" id="el-yyk80lhc">Weekly</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" id="el-enkjnjwm">Monthly</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" id="el-v62jmf4g">Yearly</button>
        </div>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6" id="el-rwlexo8e">
        <div className="lg:col-span-3 bg-white p-6 rounded-lg border border-neutral-200/30" id="el-liuvqf53">
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-mcv61o22">Today's Horoscope Overview</h3>
          <div className="space-y-4" id="el-yg4w4qps">
            <div className="flex items-center gap-4" id="el-s6mhtzcz">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center" id="el-wvpz1njz">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-hq4u1xpw">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <p className="text-gray-700" id="el-occzxgow">Your ruling planet Mercury brings favorable opportunities for communication and learning today. Focus on expressing your ideas clearly.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-ynjcsm5f">
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-pw28eddp">Quick Stats</h3>
          <div className="space-y-3" id="el-y7ca186z">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-neutral-200/30" id="el-p7ruwv5j">
              <span className="text-gray-600" id="el-j7i257fr">Lucky Number</span>
              <span className="font-semibold text-gray-800" id="el-lpddvo0r">7</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-neutral-200/30" id="el-1t6ubals">
              <span className="text-gray-600" id="el-98z4vzwo">Lucky Color</span>
              <span className="font-semibold text-gray-800" id="el-i7llvamx">Blue</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-neutral-200/30" id="el-s3uhng63">
              <span className="text-gray-600" id="el-vupspt9a">Compatible Sign</span>
              <span className="font-semibold text-gray-800" id="el-zzvzeofm">Libra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6" id="el-qwo0gdel">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-yufylk06">
          <div className="flex items-center gap-3 mb-4" id="el-67truphj">
            <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center" id="el-hvwyyioc">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-m9tu0l33">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800" id="el-5swazg9r">Love &amp; Relationships</h3>
          </div>
          <p className="text-gray-600" id="el-h7e8y76c">Venus brings harmony to your relationships today. Express your feelings openly and spend quality time with loved ones.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-e4d9c89y">
          <div className="flex items-center gap-3 mb-4" id="el-9x7gt56c">
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center" id="el-wnui4lit">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-t0c3m028">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800" id="el-f8u1ftqy">Career &amp; Finance</h3>
          </div>
          <p className="text-gray-600" id="el-0onaoa0j">A favorable time for financial planning. Consider long-term investments and career growth opportunities.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-192p5uqq">
          <div className="flex items-center gap-3 mb-4" id="el-33481kd5">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center" id="el-zsjz3f4x">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-aghx2a3c">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800" id="el-1wrk8dn4">Health &amp; Energy</h3>
          </div>
          <p className="text-gray-600" id="el-d2bq6ui2">Focus on mental wellness today. Meditation and light exercise will help maintain energy levels.</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200/30" id="el-iaovsjhb">
        <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-kgb6y5j9">Today's Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="el-6kkk1tyx">
          <div className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30" id="el-u8uhvpdz">
            <h4 className="font-semibold text-gray-800 mb-2" id="el-6dwam2v2">Do's</h4>
            <ul className="space-y-2 text-gray-600 text-sm" id="el-98ha0tgy">
              <li id="el-k6ii91ls">• Meditate in morning</li>
              <li id="el-7sjagmp6">• Wear blue attire</li>
              <li id="el-tkxtc2nd">• Connect with family</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30" id="el-bd2d328b">
            <h4 className="font-semibold text-gray-800 mb-2" id="el-0kmxgy0o">Don'ts</h4>
            <ul className="space-y-2 text-gray-600 text-sm" id="el-uokrwiqx">
              <li id="el-m92b6s4i">• Avoid conflicts</li>
              <li id="el-fa5mes7a">• Skip important calls</li>
              <li id="el-prces3om">• Make hasty decisions</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30" id="el-vfn05h0p">
            <h4 className="font-semibold text-gray-800 mb-2" id="el-0t4bg8e3">Favorable Times</h4>
            <ul className="space-y-2 text-gray-600 text-sm" id="el-veuytbkx">
              <li id="el-pe3r9avr">• Morning: 6AM - 8AM</li>
              <li id="el-qes0cb68">• Evening: 4PM - 6PM</li>
              <li id="el-qaevxw59">• Night: 9PM - 11PM</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30" id="el-jr7nwrx8">
            <h4 className="font-semibold text-gray-800 mb-2" id="el-rshi11jx">Remedies</h4>
            <ul className="space-y-2 text-gray-600 text-sm" id="el-bxwy8py0">
              <li id="el-fc63x3d8">• Chant Om mantra</li>
              <li id="el-qsmvqofb">• Light blue candle</li>
              <li id="el-7s7acwpj">• Feed birds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
