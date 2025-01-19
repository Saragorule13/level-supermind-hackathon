import React, { useState, useEffect } from "react";

const DashboardHome = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [luckyValues, setLuckyValues] = useState([
    { title: "Lucky Number", value: "7", color: "indigo" },
    { title: "Lucky Color", value: "Blue", color: "purple" },
    { title: "Lucky Direction", value: "North", color: "rose" },
  ]);

  const [dailyContents, setDailyContents] = useState([
    { title: "Daily Ritual", description: "Perform Surya Namaskar at sunrise" },
    {
      title: "Gemstone Recommendation",
      description: "Wear on middle finger for enhanced wisdom",
    },
    { title: "Today's Meditation", description: "15 minutes guided session" },
  ]);

  const randomizeValues = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const colors = [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Brown",
      "Black",
      "White",
    ];
    const directions = [
      "North",
      "South",
      "East",
      "West",
      "Northeast",
      "Northwest",
      "Southeast",
      "Southwest",
    ];

    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    setLuckyValues([
      {
        title: "Lucky Number",
        value: randomNumber.toString(),
        color: "indigo",
      },
      { title: "Lucky Color", value: randomColor, color: "purple" },
      { title: "Lucky Direction", value: randomDirection, color: "rose" },
    ]);

    const rituals = [
      "Perform Surya Namaskar at sunrise",
      "Practice deep breathing exercises",
      "Write down three things you are grateful for",
    ];
    const gemstones = [
      "Wear on middle finger for enhanced wisdom",
      "Keep in your pocket for protection",
      "Place under your pillow for better sleep",
    ];
    const meditations = [
      "15 minutes guided session",
      "10 minutes of silent meditation",
      "20 minutes of mindful breathing",
    ];

    setDailyContents([
      {
        title: "Daily Ritual",
        description: rituals[Math.floor(Math.random() * rituals.length)],
      },
      {
        title: "Gemstone Recommendation",
        description: gemstones[Math.floor(Math.random() * gemstones.length)],
      },
      {
        title: "Today's Meditation",
        description:
          meditations[Math.floor(Math.random() * meditations.length)],
      },
    ]);
  };

  useEffect(() => {
    randomizeValues();
  }, []);

  return (
    <div className="p-6" id="dashboard_home">
      {/* Welcome Section */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
        id="el-jaew3tkq"
      >
        <div
          className="bg-white p-6 rounded-lg border border-neutral-200/30 col-span-2"
          id="el-z5zzg3dl"
        >
          <div
            className="flex items-center justify-between mb-4"
            id="el-sdalsu54"
          >
            <div id="el-tb91gv9n">
              <h3 className="text-2xl font-bold text-gray-800" id="el-z3hs9dfu">
                Welcome!
              </h3>
              <p className="text-gray-600" id="el-wdgcjfib">
                Your spiritual journey continues
              </p>
            </div>
            <div className="text-right" id="el-dco9grp5">
              <p className="text-sm text-gray-600" id="el-w94yjhcc">
                Today's Date
              </p>
              <p
                className="text-lg font-semibold text-gray-800"
                id="currentDate"
              >
                {currentDate}
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
            id="el-3vj09z5p"
          >
            {luckyValues.map((item, index) => (
              <div
                key={index}
                className={`bg-${item.color}-50 p-4 rounded-lg border border-${item.color}-100`}
                id={`el-${index}`}
              >
                <h4
                  className={`text-${item.color}-600 font-semibold`}
                  id={`el-title-${index}`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-2xl font-bold text-${item.color}-700`}
                  id={`el-value-${index}`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          {/* <button onClick={randomizeValues} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Randomize Values
          </button> */}
        </div>
        <div
          className="bg-white p-6 rounded-lg border border-neutral-200/30"
          id="el-p7wlkb88"
        >
          <h3
            className="text-lg font-semibold text-gray-800 mb-4"
            id="el-t5hu53pt"
          >
            Quick Actions
          </h3>
          <div className="space-y-3" id="el-jabeakuh">
            {["Generate Birth Chart", "View Horoscope", "Start Meditation"].map(
              (action, index) => (
                <button
                  key={index}
                  className={`w-full bg-indigo-50 text-indigo-600 p-3 rounded-lg border border-indigo-100 text-left hover:bg-indigo-100 transition-colors`}
                  id={`el-action-${index}`}
                >
                  {action}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Daily Insights */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
        id="el-29cp9efu"
      >
        {dailyContents.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-neutral-200/30"
            id={`el-insight-${index}`}
          >
            <h3
              className="text-lg font-semibold text-gray-800 mb-4"
              id={`el-title-${index}`}
            >
              {item.title}
            </h3>
            <div className="flex items-start gap-4" id={`el-content-${index}`}>
              <div
                className={`w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center`}
                id={`el-icon-${index}`}
              >
                <svg
                  className={`w-6 h-6 text-amber-600`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  ></path>
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
    </div>
  );
};

export default DashboardHome;
