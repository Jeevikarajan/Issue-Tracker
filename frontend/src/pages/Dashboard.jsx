// src/pages/Dashboard.jsx
import IssueCard from "../components/IssueCard";
import { useState } from "react";

export default function Dashboard({ issues }) {
  const [filter, setFilter] = useState("All");

  const filteredIssues =
    filter === "All" ? issues : issues.filter((issue) => issue.status === filter);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Issues</h2>
      <label>
        Filter by Status:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </label>
      <div style={{ marginTop: "1rem" }}>
        {filteredIssues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        )}
      </div>
    </div>
  );
}
