import {Link} from 'react-router-dom'

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>404 Page Not Found :(</h2><br />
            <Link to="/">Go home</Link>
        </div>
    );
}
 
export default NotFound;