//useParams allows getting of route params from URL router
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

import Button from 'react-bootstrap/Button';

const PostDetails = () => {
    const {id} = useParams();
    //attaching the id to the API endpoint requests the entry with matching id
    const {data: post, error} = useFetch('http://localhost:4000/posts/' + id);
    const history = useHistory();

    const deleteHandler = () => {
        fetch('http://localhost:4000/posts/' + post.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (  
        <div className="post-details">
            {!post && <p>There seems to be nothing here :)</p>}
            {post && (<div className="post">
                <h2>{post.title}</h2>
                <p id="author">By, {post.author}</p>
                <div>
                    {post.content}
                </div>
            </div>)}
            <Button onClick={deleteHandler}>Delete</Button>
        </div>

    );
}
 
export default PostDetails;