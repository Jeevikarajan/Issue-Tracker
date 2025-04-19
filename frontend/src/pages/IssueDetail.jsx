import { useParams, useNavigate } from 'react-router-dom';

export default function IssueDetail({ issues, deleteIssue }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const issue = issues.find(i => i.id === Number(id));

  if (!issue) return <p>Issue not found.</p>;

  const handleDelete = () => {
    const confirmDelete = confirm('Are you sure you want to delete this issue?');
    if (confirmDelete) {
      deleteIssue(issue.id);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Priority: {issue.priority}</p>
      <p>Created: {new Date(issue.creationDate).toLocaleString()}</p>

      <button className="edit" onClick={() => navigate(`/edit/${issue.id}`)}>Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}
