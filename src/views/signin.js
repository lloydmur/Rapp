import Button from 'react-bootstrap/Button';

const signin = () => {
    return ( 
        <div>
            <h2>Have an Account?</h2>
            <form action="" id="signup-form">
                <label>Username:</label> <br />
                <input required type="text" /> <br />
                <label>Password:</label> <br />
                <input required type="password" /> <br />
                <Button type="submit" variant="info">Sign In!</Button>
            </form>
        </div>
     );
}
 
export default signin;