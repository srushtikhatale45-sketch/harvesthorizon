import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // Add any additional headers as needed
          }
          // Include body for POST requests
          // body: JSON.stringify({ key: 'value' }),
        })

        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;