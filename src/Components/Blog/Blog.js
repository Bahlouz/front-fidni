import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import blogPosts from './blogPosts.jsx';
import './Blog.css';
import backnavhead from "../../Assets/back navhead.jpg";

const Blog = ({ onSubmit }) => {
  const [featuredPost, setFeaturedPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const [formData, setFormData] = useState({
    nomPrenom: '',
    occupation: '',
    age: '',
    email: '',
    content: '',
    media: null
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const featured = blogPosts.find(post => post.category === 'featured');
    const recent = blogPosts.filter(post => post.category === 'recent');
    setFeaturedPost(featured);
    setRecentPosts(recent);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nomPrenom: '',
      occupation: '',
      age: '',
      email: '',
      content: '',
      media: null
    });
    setShowForm(false);
  };

  const handleAddPostClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <img className="backnavhead" src={backnavhead} alt="Background" />
    <Container fluid className="p-0">
      <Row>
        
      </Row>
      <Container className="blog-main">
        <Row>
          <Col md={8}>
            <article className="blog-article-featured">
              <h2 className="blog-article-title">{featuredPost.title}</h2>
              <img src={featuredPost.image} alt={featuredPost.alt} className="blog-article-image" />
              <p className="blog-article-info">{featuredPost.date} | {featuredPost.postedBy}</p>
              <p className="blog-article-body">{featuredPost.body}</p>
              <Link to={`/post/${featuredPost.id}`} className="blog-article-read-more">CONTINUER LA LECTURE</Link>
            </article>
            {recentPosts.map((post, index) => (
              <article className="blog-article-recent" key={index}>
                <Row>
                  <Col md={6}>
                    <div className="blog-article-recent-main">
                      <h2 className="blog-article-title">{post.title}</h2>
                      <p className="blog-article-body">{post.body}</p>
                      <Link to={`/post/${post.id}`} className="blog-article-read-more">CONTINUER LA LECTURE</Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="blog-article-recent-secondary">
                      <img src={post.image} alt={post.alt} className="blog-article-image" />
                      <p className="blog-article-info">{post.date} | {post.postedBy}</p>
                    </div>
                  </Col>
                </Row>
              </article>
            ))}
          </Col>
          <Col md={4}>
            <Button variant="primary" className="button-add-post" onClick={handleAddPostClick}>
              Ajouter un post
            </Button>
            {showForm && (
              <Form className="blog-form" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="nomPrenom"
                    value={formData.nomPrenom}
                    onChange={handleChange}
                    placeholder="Nom et Prénom"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Votre domaine d’expertise ou votre occupation"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Âge"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Contenu"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="file"
                    name="media"
                    onChange={handleChange}
                    accept="image/*,video/*"
                  />
                </Form.Group>
                <Button type="submit" variant="success">
                  Envoyer
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
};

export default Blog;
