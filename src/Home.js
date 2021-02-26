import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'Our Website on the way',
      body: 'Lorem Ipsum .... ',
      author: 'Heze',
      id: 1,
    },
    {
      title: 'Becoming REACTive',
      body: 'Lorem Ipsum .... ',
      author: 'Heze',
      id: 2,
    },
    {
      title: "This week's progress ",
      body: 'Lorem Ipsum .... ',
      author: 'Markus',
      id: 3,
    },
    {
      title: 'The useState() ',
      body: 'Lorem Ipsum .... ',
      author: 'Sim',
      id: 4,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
