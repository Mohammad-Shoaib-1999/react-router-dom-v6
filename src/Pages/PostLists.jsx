import React from 'react'
import { Link } from 'react-router-dom';
const BlogPosts = {
    'first-blog-post': {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  };

const PostLists = () => {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
      ))}
    </ul>
  )
}

export default PostLists