import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { Button, Modal, Form } from 'react-bootstrap';
// Import local data for demonstration purposes
import blogPosts from './blogPosts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    age: '',
    email: '',
    title: '',
    content: '',
    file: null
  });

  useEffect(() => {
    // Fetch blog posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Error fetching posts:', response.statusText);
          // Use local data as fallback if the fetch fails
          setPosts(blogPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Use local data as fallback if the fetch fails
        setPosts(blogPosts);
      }
    };

    fetchPosts();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          // No 'Content-Type' header needed, as FormData sets it automatically
        },
      });
      setShow(false);
      // Optionally, refresh the posts after submission
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const featuredPost = posts[0];
  const otherFeaturedPosts = posts.slice(1, 6);
  const allPosts = posts.slice(6);

  return (
    <>
      <div className="background-image-blog">
        <div className="overlay-text-blog-singlepage">
          <h1 className="p-5 blog-titre-singlepage">Blog</h1>
          <Button variant="primary" onClick={handleShow} className="my-4">
            Ajouter un post
          </Button>
        </div>
      </div>
      <div className="background-image-blog-two">
        <div className="blog-container-unique">
          <div className="featured-post-container-unique">
            {featuredPost && (
              <div className="featured-post-unique">
                <Link to={`/blog/${featuredPost.id}`} className="post-link">
                  <img src={featuredPost.image} alt={featuredPost.alt} className="featured-image-unique" />
                </Link>
                <div className="featured-content-unique">
                  <span className="featured-category-unique">{featuredPost.category}</span>
                  <h1 className="featured-title-unique">{featuredPost.title}</h1>
                </div>
              </div>
            )}
            <div className="other-featured-posts-unique">
              <h2 className="other-featured-title-unique">Other featured posts</h2>
              {otherFeaturedPosts.map(post => (
                <div key={post.id} className="other-post-unique">
                  <img src={post.image} alt={post.alt} className="other-post-image-unique" />
                  <div className="other-post-content-unique">
                    <Link to={`/blog/${post.id}`} className="post-link">
                      <h3 className="other-post-title-unique">{post.title}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="all-posts-container-unique">
            <h2 className="all-posts-title-unique">All Posts</h2>
            <div className="all-posts-grid-unique">
              {allPosts.map(post => (
                <div key={post.id} className="post-unique">
                  <img src={post.image} alt={post.alt} className="post-image-unique" />
                  <div className="post-content-unique">
                    <Link to={`/blog/${post.id}`} className="post-link">
                      <h3 className="post-title-unique">{post.title}</h3>
                    </Link>
                    <p className="post-description-unique">{post.description}</p>
                    <div className="post-meta-unique">
                      <span className="post-author-unique">{post.postedBy}</span>
                      <span className="post-date-unique">{post.date}</span>
                      <span className="post-readtime-unique">• {post.readTime} read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for PostBlogForum */}
      <Modal show={show} onHide={handleClose} centered style={{ marginTop: "5em", zIndex: "10000" }}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control 
                type="text" 
                name="name"
                placeholder="Nom et Prénom"
                value={formData.name}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formDomain" className="mb-3">
              <Form.Control 
                type="text" 
                name="domain"
                placeholder="Votre domaine d'expertise"
                value={formData.domain}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formAge" className="mb-3">
              <Form.Control 
                type="number" 
                name="age"
                placeholder="Âge"
                value={formData.age}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control 
                type="email" 
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Control 
                type="text" 
                name="title"
                placeholder="Titre de post"
                value={formData.title}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formContent" className="mb-3">
              <Form.Control 
                as="textarea" 
                name="content"
                rows={3} 
                placeholder="Contenu de post"
                value={formData.content}
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control 
                type="file" 
                name="file"
                multiple
                onChange={handleChange} 
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Envoyer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Blog;
