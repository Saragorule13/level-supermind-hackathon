import React, { useState } from "react";

const ChatConsole = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your spiritual AI guide. How can I assist you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add user message to chat
      setChatMessages([...chatMessages, { sender: "user", text: message }]);

      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/chatbot`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: message }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response from server:", data);

        // Extract the actual text response from the LangFlow response object
        let aiResponse;
        if (typeof data.response === "string") {
          aiResponse = data.response;
        } else if (data.response && data.response.outputs) {
          // If response is an object with outputs property
          aiResponse = data.response.outputs || "No response available";
        } else if (data.response && typeof data.response === "object") {
          // If it's some other object structure, try to convert it to string
          aiResponse = data.response[0].outputs[0].artifacts.message;
        } else {
          aiResponse = "Unexpected response format";
        }

        // Add AI response to chat
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: aiResponse,
          },
        ]);
      } catch (error) {
        console.error("Detailed error:", error);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: `Error: ${error.message || "Unknown error occurred"}`,
          },
        ]);
      } finally {
        setIsLoading(false);
      }

      setMessage("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-violet-500">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-white mb-4">
          AI-Powered Spiritual Recommendations
        </h2>
        {/* <p className="text-xl text-neutral-600">Personalized guidance powered by advanced artificial intelligence</p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Chatbot Demo */}
        <div className="animate__animated animate__fadeInLeft">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-xl font-bold text-neutral-900">
                Spiritual AI Chatbot
              </h3>
            </div>
            <div
              className="space-y-4 h-[400px] overflow-y-auto mb-4"
              id="chat-messages"
            >
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    msg.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`${
                      msg.sender === "user" ? "bg-neutral-300" : "bg-violet-500"
                    } rounded-full p-2`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          msg.sender === "user"
                            ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        }
                      ></path>
                    </svg>
                  </div>
                  <div
                    className={`ml-4 ${
                      msg.sender === "user" ? "bg-neutral-100" : "bg-violet-50"
                    } rounded-lg p-4 max-w-[80%]`}
                  >
                    <p className="text-neutral-800">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Ask your question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition duration-300"
                onClick={handleSendMessage}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="animate__animated animate__fadeInRight">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-violet-100 p-2 rounded-lg mr-3">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                Personalized Gemstone Recommendations
              </h4>
              <p className="text-neutral-600">
                AI-driven suggestions for gemstones based on your astrological
                chart and current life situations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-violet-100 p-2 rounded-lg mr-3">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </span>
                Ritual &amp; Pooja Guidance
              </h4>
              <p className="text-neutral-600">
                Customized spiritual practices and rituals aligned with your
                cosmic energies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-violet-100 p-2 rounded-lg mr-3">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </span>
                Do's &amp; Don'ts Analysis
              </h4>
              <p className="text-neutral-600">
                Personalized daily and monthly guidelines based on astrological
                transits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConsole;
