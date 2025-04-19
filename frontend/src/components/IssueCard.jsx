import { Link } from 'react-router-dom';

export default function IssueCard({ issue }) {
  return (
    <div className="issue-card">
      <Link to={`/issue/${issue.id}`}>
        <h3>{issue.title}</h3>
      </Link>
      <p>{issue.description.slice(0, 100)}...</p>
      <small>
        ID: {issue.id} | Status: {issue.status} | Priority: {issue.priority} | Created: {new Date(issue.creationDate).toLocaleDateString()}
      </small>
    </div>
  );
}
