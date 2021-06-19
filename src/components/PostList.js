import React from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import Button from 'react-bootstrap/Button';
//props are passed into a component from outside similarly to route params

const PostList = (props) => {
    const {data, error} = useFetch('http://localhost:4000/posts');
    const posts = data;
    //const activeUser = props.activeUser;
    const activeUser = 'Cornelius';
    let content;
    if(posts == null){
        content = <p>Loading...</p>
    }
    else if(posts.length == 0){
        content = <p>No posts, thank goodness.</p>
    }
    else{
        content = 
        <div>
            {posts.map((post) => (
            <div className="post-preview" key={post.id}>
                <Link to={"/post/" + post.id}>
                    <h2>{post.title}</h2>
                </Link>
                
                <p>By, {post.author}</p>
                {(activeUser == post.author) &&
                    <Button variant="danger">
                        Delete
                    </Button>
                }
                
            </div>
            ))}
        </div> 
    }
    return ( 
        <div className="post-list">
            {error && <div> {error} </div>}
            {content}
        </div>
     );
    
}

export default PostList;