import {useState} from 'react'
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';

const Signin = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submissionHandler = (e) => {
        e.preventDefault();
        //header: {"Content-Type": "application/json"} tells 
        fetch(`http://localhost:4000/users?userName=${userName}&password=${password}`)
        .then((res) => {
            //setActiveUser(res);
            console.log(res);
            history.push('/');  
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return ( 
        <div>
            <h2>Have an Account?</h2>
            <form 
                id="signup-form"
                onSubmit={submissionHandler}
            >
                <label>Username:</label> <br />
                <input required 
                    type="text" 
                    value={userName}
                    onChange = {(e) => setUserName(e.target.value)}
                /> 
                <br />
                <label>Password:</label> <br />
                <input required 
                    type="password"
                    name="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)} 
                /> 
                <br />
                <Button variant="info" type="submit">Sign me in!</Button>
            </form>
        </div>
     );
}
 
export default Signin;