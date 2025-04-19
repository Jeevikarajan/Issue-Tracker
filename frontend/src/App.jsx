// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import IssueDetail from './pages/IssueDetail';
import IssueForm from './pages/IssueFrom';
import { useState } from 'react';

export default function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues(prev => [...prev, { ...newIssue, id: prev.length + 1 }]);
  };

  const updateIssue = (id, updatedData) => {
    setIssues(prev =>
      prev.map(issue => (issue.id === id ? { ...issue, ...updatedData } : issue))
    );
  };

  const deleteIssue = (id) => {
    setIssues(prev => prev.filter(issue => issue.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Home landing page */}
          <Route path="/dashboard" element={<Dashboard issues={issues} />} />
          <Route path="/create" element={<IssueForm addIssue={addIssue} />} />
          <Route path="/edit/:id" element={<IssueForm issues={issues} updateIssue={updateIssue} />} />
          <Route path="/issue/:id" element={<IssueDetail issues={issues} deleteIssue={deleteIssue} />} />
        </Routes>
      </div>
    </Router>
  );
}
