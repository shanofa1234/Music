import React, { useState } from 'react';

export default function ProgressTracker() {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    id: '',
    date: '',
    mood: '',
    productivity: '',
    sleep: '',
    exercise: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.id && formData.date && formData.mood && formData.productivity && formData.sleep && formData.exercise) {
      setEntries(prevEntries => [...prevEntries, formData]);
      setFormData({
        username: '',
        id: '',
        date: '',
        mood: '',
        productivity: '',
        sleep: '',
        exercise: '',
        notes: ''
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  const downloadReport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + entries.map(entry => Object.values(entry).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mood_progress_report.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/gradient-music-notes-background_23-2151270119.jpg?t=st=1717346637~exp=1717350237~hmac=69a9c54aae7c7b7a72a5cb65fe5e15aeb860e97ab682179ac1768fd764390fa8&w=1060')" }}>
      <div className="bg-white bg-opacity-50 p-8 rounded-md shadow-lg w-3/4">
        <h1 className="text-3xl font-bold mb-8">Mood and Progress Tracker</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-lg font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="id" className="block text-lg font-medium">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-medium">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="mood" className="block text-lg font-medium">Mood (1-10)</label>
            <input
              type="number"
              id="mood"
              name="mood"
              value={formData.mood}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="productivity" className="block text-lg font-medium">Productivity (1-10)</label>
            <input
              type="number"
              id="productivity"
              name="productivity"
              value={formData.productivity}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="sleep" className="block text-lg font-medium">Sleep (hours)</label>
            <input
              type="number"
              id="sleep"
              name="sleep"
              value={formData.sleep}
              onChange={handleChange}
              min="0"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="exercise" className="block text-lg font-medium">Exercise (minutes)</label>
            <input
              type="number"
              id="exercise"
              name="exercise"
              value={formData.exercise}
              onChange={handleChange}
              min="0"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-lg font-medium">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 border rounded"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Entry</button>
        </form>
      </div>

      <div className="mt-6 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Tracked Data</h2>
        <table className="min-w-full bg-white bg-opacity-50 rounded shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Mood</th>
              <th className="py-2 px-4 border">Productivity</th>
              <th className="py-2 px-4 border">Sleep</th>
              <th className="py-2 px-4 border">Exercise</th>
              <th className="py-2 px-4 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className="bg-white border bg-opacity-70">
                <td className="py-2 px-4 border">{entry.username}</td>
                <td className="py-2 px-4 border">{entry.id}</td>
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">{entry.mood}</td>
                <td className="py-2 px-4 border">{entry.productivity}</td>
                <td className="py-2 px-4 border">{entry.sleep}</td>
                <td className="py-2 px-4 border">{entry.exercise}</td>
                <td className="py-2 px-4 border">{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button onClick={downloadReport} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Download Report</button>
      </div>
    </div>
  );
}
