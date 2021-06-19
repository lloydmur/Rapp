import {useState} from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';

const Signup = () => {
    //when using forms, state must be updated alongside input value
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submissionHandler = (e) => {
        //when a form is submitted, it refreshes the page by defalut, the following prevents that
        e.preventDefault();
        const isAdmin = (userName == 'Admin')? true : false;
        const newUser = {
            userName, 
            password,
            posts: [],
            firends: [],
            isAdmin: isAdmin
        };
        //header: {"Content-Type": "application/json"} tells 
        fetch('http://localhost:4000/users', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(() => {
            console.log('New User Created!');
            console.log(newUser);
            //redirect to home page
            history.push('/');
        })
   }
    return ( 
        <div>
            <h2>Create an Account!</h2>
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
                <label>Confirm Password:</label> <br />
                <input required type="password" /> <br />
                <Button variant="info" type="submit">Create Account!</Button>
            </form>
        </div>
     );
}
 
export default Signup;