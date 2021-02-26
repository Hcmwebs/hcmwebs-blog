const Navbar = () => {
  const title = 'Welcome to Hcmwebs Updates';
  return (
    <nav className='navbar'>
      <h1> {title}</h1>
      <div className='links'>
        <a href='/'> Home</a>
        <a href='/create'> New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
