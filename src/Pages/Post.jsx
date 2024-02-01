import React from 'react'
import { useParams } from 'react-router-dom'
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
const Post = () => {
    const {slug} = useParams();
    const post = BlogPosts[slug];
    if(!post){
        return <span>The blog post you've requested doesn't exist. </span>
    }
    const {title,description} = post;

  return (
     <div className='p-5'>
    <h1 className=" text-4xl">{title}</h1>
    <p>{description}</p>
  </div>
  )
}

export default Post