import React, { useState } from 'react';
import axios from 'axios';

export default function CheckIn() {
  const [formData, setFormData] = useState({
    id: '',
    usernames: '',
    favoriteGenres: [],
    favoriteArtists: '',
    preferredListeningTime: '',
    preferredTypeOfMusic: [],
    currentMood: 5,
    commonEmotions: [],
    emotionFrequency: {
      anxious: '',
      // Add more fields for other emotions as needed
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
      }));
    } else if (type === 'range') {
      setFormData(prevState => ({ ...prevState, [name]: Number(value) }));
    } else if (name.includes('.')) {
      const [mainKey, subKey] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [mainKey]: {
          ...prevState[mainKey],
          [subKey]: value
        }
      }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/adduser', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <img
          src="https://img.freepik.com/free-photo/headphones-present-smartphone_23-2147670597.jpg?t=st=1717053034~exp=1717056634~hmac=35efbb49a418f60d3ab35ff89c5f73925e308ad25a2c45d04fa876b49edd7482&w=1060"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto p-8 relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-white">Music Preferences Questionnaire</h1>

        <form onSubmit={handleSubmit} className="bg-white bg-opacity-70 p-8 rounded-md shadow-lg">
          <div className="mb-8">
            <label className="block mb-2">ID:</label>
            <input
              type="text"
              name="id"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              placeholder="Enter your ID"
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              name="usernames"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2">Favorite Genres:</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="Classical" name="favoriteGenres" onChange={handleChange} />
                <span className="ml-2">Classical</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="Jazz" name="favoriteGenres" onChange={handleChange} />
                <span className="ml-2">Jazz</span>
              </label>
              {/* Add more genres as needed */}
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-2">Favorite Artists/Bands:</label>
            <input
              type="text"
              name="favoriteArtists"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              placeholder="Enter your favorite artists or bands"
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2">Preferred Time for Listening to Music:</label>
            <select name="preferredListeningTime" className="w-full border border-gray-300 rounded-md py-2 px-4" onChange={handleChange}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block mb-2">Preferred Type of Music:</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="Instrumental" name="preferredTypeOfMusic" onChange={handleChange} />
                <span className="ml-2">Instrumental</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="Vocal" name="preferredTypeOfMusic" onChange={handleChange} />
                <span className="ml-2">Vocal</span>
              </label>
              {/* Add more types as needed */}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Mood and Emotional State Survey</h2>

          <div className="mb-8">
            <label className="block mb-2">Current Mood:</label>
            <input type="range" name="currentMood" className="w-full" min="1" max="10" defaultValue="5" onChange={handleChange} />
          </div>

          <div className="mb-8">
            <label className="block mb-2">Common Emotions Experienced:</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="happy" name="commonEmotions" onChange={handleChange} />
                <span className="ml-2">Happy</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" value="sad" name="commonEmotions" onChange={handleChange} />
                <span className="ml-2">Sad</span>
              </label>
              {/* Add more emotions as needed */}
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-2">Frequency of Certain Emotions:</label>
            <div className="space-y-2">
              <label className="block">
                How often do you feel anxious?
                <select name="emotionFrequency.anxious" className="w-full border border-gray-300 rounded-md py-2 px-4" onChange={handleChange}>
                  <option>Never</option>
                  <option>Rarely</option>
                  <option>Sometimes</option>
                  <option>Often</option>
                  <option>Always</option>
                </select>
              </label>
              {/* Add more emotion frequency questions as needed */}
            </div>
          </div>

          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onChange={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}