import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogPosts from './blogPosts';
import { Button, Modal, Form } from 'react-bootstrap';

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherFeaturedPosts = blogPosts.slice(1, 6);
  const allPosts = blogPosts.slice(6);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="featured-post-unique">
              <Link to={`/blog/${featuredPost.id}`} className="post-link">
                <img src={featuredPost.image} alt={featuredPost.alt} className="featured-image-unique" />
              </Link>
              <div className="featured-content-unique">
                <span className="featured-category-unique">{featuredPost.category}</span>
                <h1 className="featured-title-unique">{featuredPost.title}</h1>
              </div>
            </div>
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
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Nom et Prénom" />
            </Form.Group>

            <Form.Group controlId="formDomain" className="mb-3">
              <Form.Control type="text" placeholder="Votre domaine d'expertise" />
            </Form.Group>

            <Form.Group controlId="formAge" className="mb-3">
              <Form.Control type="number" placeholder="Âge" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formContent" className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Contenu" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
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
