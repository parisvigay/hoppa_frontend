import './LoginCard.css'
import { Link } from 'react-router-dom';
import { IoIosBeer } from "react-icons/io";
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function LoginCard() {
    // const style = {
    //     backgroundImage: `url(${beer})`,
    //     backgroundSize: "contain",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat"
    // }

  return (
    <div className="logInCard">
        {/* <div className="beerImgCard" style={style}></div> */}
        {/* <IoIosBeer className="beerIcon"/> */}
        <form className="loginForm">
          <h3 className="signIn-h3">Sign in to your account</h3>
          <div id="loginName">
            <FormLabel id="loginLabel">Username</FormLabel>
            <Input 
              className="loginInput"
              name="username"
            //   value={username}
              required
            //   onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div id="loginPassword">
            <FormLabel id="loginLabel">Password</FormLabel>
            <Input 
              className="loginInput" 
              name="password"
            //   value={password}
              required
            //   onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="loginBtn">Log in</div>
          <Link className="linkToSignup" style={{ textDecoration: 'none' }} to="/signup">Don't have an account? Sign up</Link>
        </form>
    </div>
  )
}