const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className='blog_list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>
            Read and Delete Me
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
