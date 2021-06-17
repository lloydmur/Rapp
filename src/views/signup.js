import Button from 'react-bootstrap/Button';

const signup = () => {
    return ( 
        <div>
            <h2>Create an Account!</h2>
            <form action="" id="signup-form">
                <label>Username:</label> <br />
                <input required type="text" /> <br />
                <label>Password:</label> <br />
                <input required type="password" /> <br />
                <label>Confirm Password:</label> <br />
                <input required type="password" /> <br />
                <Button type="submit" variant="info">Create Account!</Button>
            </form>
        </div>
     );
}
 
export default signup;