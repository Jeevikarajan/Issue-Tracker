import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateIssue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    title: '', description: '', status: 'Open', priority: 'Medium'
  });

  useEffect(() => {
    if (isEdit) {
      fetch(`/api/issues/${id}`)
        .then(res => res.json())
        .then(data => setForm(data));
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = isEdit ? `/api/issues/${id}` : '/api/issues';
    const method = isEdit ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        creationDate: isEdit ? form.creationDate : new Date(),
      }),
    });

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEdit ? 'Edit Issue' : 'Create New Issue'}</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required /><br />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select><br />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select><br />
      <button type="submit">{isEdit ? 'Update' : 'Submit'}</button>
    </form>
  );
}
