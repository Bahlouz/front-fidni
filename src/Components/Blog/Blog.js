import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogPosts from './blogPosts.jsx';
import { Container,Row } from 'react-bootstrap';
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
    media:null
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const featured = blogPosts.find(post => post.category === 'featured');
    const recent = blogPosts.filter(post => post.category === 'recent');
    setFeaturedPost(featured);
    setRecentPosts(recent);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
      media:null
    });
    setShowForm(false);
  };

  const handleAddPostClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Row>
        <img className="backnavhead" src={backnavhead} aria-hidden="true" />
        </Row> 
      <Container fluid className="p-0 blog-main">     
      <Container fluid className="blog-container">
      
        <div className="blog-container-flex">
          <main role="main">
            <article className="blog-article-featured">
              <h2 className="blog-article-title">{featuredPost.title}</h2>
              <img src={featuredPost.image} alt={featuredPost.alt} className="blog-article-image" />
              <p className="blog-article-info">{featuredPost.date} | {featuredPost.postedBy}</p>
              <p className="blog-article-body">{featuredPost.body}</p>
              <Link to={`/post/${featuredPost.id}`} className="blog-article-read-more">CONTINUER LA LECTURE</Link>
            </article>
            {recentPosts.map((post, index) => (
              <article className="blog-article-recent" key={index}>
                <div className="blog-article-recent-main">
                  <h2 className="blog-article-title">{post.title}</h2>
                  <p className="blog-article-body">{post.body}</p>
                  <Link to={`/post/${post.id}`} className="blog-article-read-more">CONTINUER LA LECTURE</Link>
                </div>
                <div className="blog-article-recent-secondary">
                  <img src={post.image} alt={post.alt} className="blog-article-image" />
                  <p className="blog-article-info">{post.date} | {post.postedBy}</p>
                </div>
              </article>
            ))}
          </main>
        </div>
        <button className="button-add-post" onClick={handleAddPostClick}>Ajouter un post</button>
      {showForm && (
        <form className="blog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nomPrenom"
            value={formData.nomPrenom}
            onChange={handleChange}
            placeholder="Nom et Prénom"
            required
          />
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Votre domaine d’expertise ou votre occupation"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Âge"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Contenu"
            required
          />
          <input
            type="file"
            name="media"
            onChange={handleChange}
            accept="image/*,video/*" // Adjust accepted file types as needed
          />
          <button type="submit">Envoyer</button>
        </form>
      )}
      </Container>
      </Container>   
    </div>
  );
};

export default Blog;
