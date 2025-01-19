import { useState } from 'react';

const Horoscope = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthDate: '',
    birthTime: '',
    state: '',
    city: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically save the data to your backend
      // await saveHoroscopeData(formData);
      onComplete();
    } catch (error) {
      console.error('Error saving horoscope data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-neutral-800/50 p-8 rounded-xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Complete Your Profile</h2>
          <p className="mt-2 text-neutral-400">Please provide your birth details for personalized insights</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white mb-2 font-medium">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-white mb-2 font-medium">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Birth Date Field */}
          <div>
            <label className="block text-white mb-2 font-medium">Date of Birth</label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              required
            />
          </div>

          {/* Birth Time Field */}
          <div>
            <label className="block text-white mb-2 font-medium">Time of Birth</label>
            <input
              type="time"
              value={formData.birthTime}
              onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              required
            />
          </div>

          {/* State Field */}
          <div>
            <label className="block text-white mb-2 font-medium">State</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              placeholder="Enter your state"
              required
            />
          </div>

          {/* City Field */}
          <div>
            <label className="block text-white mb-2 font-medium">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              className="w-full p-3 rounded-lg bg-neutral-700/50 text-white border border-neutral-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
              placeholder="Enter your city"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-3 px-4 rounded-lg hover:bg-violet-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Horoscope;
