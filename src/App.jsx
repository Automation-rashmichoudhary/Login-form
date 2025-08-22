import { useState } from "react"


export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
  <div className="container">
    <div className="form-container">
      <div className="form-toggle">
        <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>Login</button>
        <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin(false)}>SignUp</button>
      </div>
        { isLogin ? <>
        <div className="form">
          <h2>Login Form</h2>
          <input type="Email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <a href="#">Forgot Password?</a>
          <button>Login</button>
          <p>Not a Member?   <a href="#" onClick={()=> setIsLogin(false)}>SignUp now</a></p>
          </div>
          </> : <>
          <div className="form">
          <h2>SignUp Form</h2>
          <input type="Email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="Confirm password" placeholder="Password"/>
          <button>SignUp</button>
          </div>
          </> }
        
  </div>
    </div>
      <div className="password-container">Learning React with JS</div>
      <div className="password-input">
        <input type = "password" placeholder ="Enter your password" />
      </div>
    </>
  )
}


