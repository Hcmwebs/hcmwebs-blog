import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Heze');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog Added');
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label>Blog Title</label>
          <input
            type='text'
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label> Blog body</label>
          <textarea
            required
            value={body}
            onChange={e => setBody(e.target.value)}></textarea>
        </div>

        <div className='formGroup'>
          <label>Blog Author: </label>
          <select value={author} onChange={e => setAuthor(e.target.value)}>
            <option value='Heze'>Heze</option>
            <option value='Markus'>Markus</option>
          </select>
        </div>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled> Adding blog ...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
