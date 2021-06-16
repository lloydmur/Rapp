//useParams allows getting of route params from URL router
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const PostDetails = () => {
    const {id} = useParams();
    //attaching the id to the API endpoint requests the entry with matching id
    const {data: post, error} = useFetch('http://localhost:4000/posts/' + id);

    return (  
        <div className="post-details">
            {!post && <p>There seems to be nothing here :)</p>}
            {post && (<div className="post">
                <h2>{post.title}</h2>
                <p>By, {post.author}</p>
                <div>
                    {post.content}
                </div>
            </div>)}
        </div>

    );
}
 
export default PostDetails;