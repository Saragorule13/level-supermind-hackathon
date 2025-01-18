import React from "react";

const BirthChart = () => {
  return (
    <div className="p-6  bg-neutral-900" id="birth_chart">
      {/* Birth Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" id="el-2u4hn828">
        <div
          className="lg:col-span-2 bg-white p-6 rounded-lg border border-neutral-200/30"
          id="el-sxtub9ko"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-dvkdkqps">
            Birth Chart Details
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="el-svez0qj7">
            {[
              { label: "Name", value: "John Doe" },
              { label: "Date of Birth", value: "15 June 1990" },
              { label: "Time of Birth", value: "08:30 AM" },
              { label: "Place of Birth", value: "New Delhi" },
              { label: "Latitude", value: "28.7041° N" },
              { label: "Longitude", value: "77.1025° E" },
            ].map((detail, index) => (
              <div
                className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30"
                key={index}
              >
                <p className="text-sm text-gray-600">{detail.label}</p>
                <p className="font-semibold text-gray-800">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg border border-neutral-200/30"
          id="el-z04fkz2l"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-qalzgqbm">
            Planetary Positions
          </h3>
          <div className="space-y-3" id="el-i33ooq4a">
            {[
              { planet: "Sun", position: "Gemini" },
              { planet: "Moon", position: "Taurus" },
              { planet: "Mars", position: "Aries" },
              { planet: "Venus", position: "Libra" },
            ].map((item, index) => (
              <div
                className="flex justify-between items-center p-2 bg-gray-50 rounded border border-neutral-200/30"
                key={index}
              >
                <span className="text-gray-700">{item.planet}</span>
                <span className="font-semibold text-gray-800">{item.position}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Birth Chart Wheel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" id="el-fg84zdyb">
        <div
          className="lg:col-span-2 bg-white p-6 rounded-lg border border-neutral-200/30"
          id="el-eqkqsljj"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-qcr0d3sb">
            Birth Chart Wheel
          </h3>
          <div
            className="aspect-square bg-gray-50 rounded-lg border border-neutral-200/30 p-4 flex items-center justify-center"
            id="el-3hc4rmro"
          >
            <div className="text-center text-gray-500" id="el-p1wocvor">
              <svg
                className="w-12 h-12 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-rekos9zq"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <p className="mt-2" id="el-vpd134zj">
                Interactive Birth Chart Wheel
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg border border-neutral-200/30"
          id="el-aeqfsj2h"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-o53tebb9">
            House Positions
          </h3>
          <div className="space-y-3" id="el-2ylelq4i">
            {[
              { house: "1st House (Ascendant)", description: "Leo - Self & Personality" },
              { house: "2nd House", description: "Virgo - Wealth & Values" },
              { house: "3rd House", description: "Libra - Communication" },
              { house: "4th House", description: "Scorpio - Home & Family" },
            ].map((item, index) => (
              <div
                className="p-3 bg-gray-50 rounded border border-neutral-200/30"
                key={index}
              >
                <p className="text-sm font-medium text-gray-700">{item.house}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interpretations Section */}
      <div
        className="bg-white p-6 rounded-lg border border-neutral-200/30"
        id="el-appss8x2"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4" id="el-1ynd9h8o">
          Chart Interpretations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="el-sloh7y2c">
          {[
            {
              title: "Career Insights",
              content:
                "Strong placement of Saturn in the 10th house indicates potential for leadership roles and long-term career success.",
            },
            {
              title: "Relationship Dynamics",
              content:
                "Venus in Libra suggests harmonious relationships and natural diplomatic abilities.",
            },
            {
              title: "Personal Growth",
              content:
                "Jupiter's position indicates opportunities for spiritual growth and higher learning.",
            },
          ].map((item, index) => (
            <div
              className="p-4 bg-gray-50 rounded-lg border border-neutral-200/30"
              key={index}
            >
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthChart;
