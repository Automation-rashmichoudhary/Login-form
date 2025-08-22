import { useState } from "react"


export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  // Separate state for login and signup
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");

  const validateEmail = (email, setError) => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail(loginEmail, setLoginError)) {
      setLoginError("");
      alert("Login successful");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    let valid = true;
    // Email validation
    if (!signupEmail) {
      setSignupEmailError("Email is required");
      valid = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(signupEmail)) {
        setSignupEmailError("Please enter a valid email address");
        valid = false;
      } else {
        setSignupEmailError("");
      }
    }
    // Password validation
    if (!signupPassword) {
      setSignupPasswordError("Password is required");
      valid = false;
    } else if (signupPassword !== signupConfirmPassword) {
      setSignupPasswordError("Passwords do not match");
      valid = false;
    } else {
      setSignupPasswordError("");
    }
    if (valid) {
      alert("SignUp successful");
    }
  };

  // Show password mismatch error as user types
  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
    if (signupConfirmPassword && e.target.value !== signupConfirmPassword) {
      setSignupPasswordError("Passwords do not match");
    } else {
      setSignupPasswordError("");
    }
  };
  const handleSignupConfirmPasswordChange = (e) => {
    setSignupConfirmPassword(e.target.value);
    if (signupPassword && e.target.value !== signupPassword) {
      setSignupPasswordError("Passwords do not match");
    } else {
      setSignupPasswordError("");
    }
  };


  return (
    <>
  <div className="container">
    <div className="form-container">
      <div className="form-toggle">
        <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>Login</button>
        <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin(false)}>SignUp</button>
      </div>
        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            {loginError && <div className="error">{loginError}</div>}
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <a href="#">Forgot Password?</a>
            <button onClick={handleLogin}>Login</button>
            <p>
              Not a Member?{' '}
              <a href="#" onClick={() => { setIsLogin(false); setLoginError(""); }}>
                SignUp now
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h2>SignUp Form</h2>
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            {signupEmailError && <div className="error">{signupEmailError}</div>}
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={handleSignupPasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupConfirmPassword}
              onChange={handleSignupConfirmPasswordChange}
            />
            {signupPasswordError && <div className="error">{signupPasswordError}</div>}
            <button onClick={handleSignUp}>SignUp</button>
          </div>
        )}
        
  </div>
    </div>
      <div className="password-container">Learning React with JS</div>
      <div className="password-input">
        <input type = "password" placeholder ="Enter your password" />
      </div>
    </>
  )
}


