import React, { useContext } from 'react';
import { PostContext } from '../../Loader';

export function BlogPost() {
    const post = useContext(PostContext)
  
    return <h1>{post.title}</h1>
  }