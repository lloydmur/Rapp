import React from 'react';
import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch'
//props are passed into a component from outside similarly to route params

const PostList = () => {
    const data = useFetch('http://localhost:4000/posts');
    const posts = data;
    let content;
    if(posts == null){
        content = <p>Loading...</p>
    }
    else if(posts.length > 0){
        content = 
        <div>
            {posts.map((post) => (
            <div className="post-preview" key={post.id}>
                <h2>{post.title}</h2>
                <p>By, {post.author}</p>
                <button>
                    Delete
                </button>
            </div>
            ))}
        </div> 
    }
    return ( 
        <div className="post-list">
            {content}
        </div>
     );
    
}

export default PostList;