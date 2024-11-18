import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'; // Custom CSS file for modern styling.
import { Container } from 'react-bootstrap';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://bldonors-server.vercel.app/blogs')
      .then((response) => response.json())
      .then((data) => {
        const publishedPosts = data.filter((post) => post.status === 'published').slice(0, 3);
        setPosts(publishedPosts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const truncateText = (text, maxLength = 70) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Container>
    <div className="container py-5" id="blog-section">
      <h1 className="text-center text-danger fw-bold mb-5 title display-4">
        Blood Donation Blogs
      </h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card modern-card h-100">
              <img
                src={post.photo}
                alt={post.title}
                className="card-img-top rounded-top image"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{post.title}</h5>
                <p className="card-text text-muted">
                  {truncateText(post.content.replace(/<[^>]+>/g, ''), 275)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></Container>
  );
};

export default Blog;
