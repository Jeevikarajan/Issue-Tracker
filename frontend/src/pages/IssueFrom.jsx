import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function IssueForm({ addIssue, updateIssue, issues }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'Open',
    priority: 'Medium',
    creationDate: new Date().toISOString(),
  });

  useEffect(() => {
    if (isEdit && issues) {
      const found = issues.find(i => i.id === Number(id));
      if (found) setForm(found);
    }
  }, [id, isEdit, issues]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateIssue(Number(id), form);
    } else {
      addIssue(form);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{isEdit ? 'Edit Issue' : 'Create New Issue'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label><br />
        <input name="title" value={form.title} onChange={handleChange} required /><br /><br />

        <label>Description:</label><br />
        <textarea name="description" value={form.description} onChange={handleChange} required /><br /><br />

        <label>Status:</label><br />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select><br /><br />

        <label>Priority:</label><br />
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select><br /><br />

        <button type="submit">{isEdit ? 'Update Issue' : 'Create Issue'}</button>
      </form>
    </div>
  );
}
