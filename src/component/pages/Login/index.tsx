import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHandPointDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaK } from "react-icons/fa6";
import { useLoginPassword } from "../../../Framework/login";

const UserLogin = () => {
    const [login,setLogin] = useState("userId");
    const [mobileNo,setMobileNo] = useState('');
    const [password,setPassword] = useState('');
    const [userId,setUserId] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const togglePasswordVisibility = (setter: { (value: React.SetStateAction<boolean>): void; (arg0: (prev: any) => boolean): void; }) => {
        setter((prev: any) => !prev);
      };
    const Navigate = useNavigate();
        const { mutate: loginUser, isError: error } = useLoginPassword();
       
    const handleLogin = (e:any) => {
        e.preventDefault();

        if (login === 'userId') {
     
        loginUser({UserName:userId,Password:password});

        //    window.location.reload();
        } else {
          alert("Invalid mobile number or password");
        }
      };
    const logInWithDemo = () => {
       

        localStorage.setItem('isLoginAsDemo', 'true');
        // window.location.reload();

        Navigate("/home")
        
       
    }

  return (
    <div className="wrapper">
      <div className="login-page">
        <div className="login-box">
          {/* Logo */}
          <div className="logo-login">
            <a href="/">
              <img
                src="https://sitethemedata.com/sitethemes/allpanelexch.com/front/logo.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Login Form */}
          <div className="login-form mt-4">
            <h4 className="text-center login-title">
              Login <FaHandPointDown/> 
            </h4>
            <form>
              {/* Username Input */}
              <div className="mb-4 input-group position-relative">
                <input
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  autoComplete="off"
                />
                <span className="input-group-text">
                    <FaUser/>
                
                </span>
              </div>

              {/* Password Input */}
              <div className="mb-4 input-group position-relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type={!showPassword ? "password":"text"}
                  className="form-control"
                  placeholder="Password"
                  autoComplete="off"
                />
                <span className="input-group-text pointer" onClick={()=>togglePasswordVisibility(setShowPassword)}>
                    <FaKey/>

                </span>
              </div>

              {/* Buttons */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>{handleLogin(e)}}>
                  Login
                  <FaSignInAlt className="float-end mt-1" />
                
                </button>
                <button className="btn btn-primary btn-block mt-2" onClick={()=>{logInWithDemo()}}>
                  Login with demo ID
                  <FaSignInAlt className="float-end mt-1" />

                </button>
              </div>

              {/* Recaptcha Terms */}
              <small className="recaptchaTerms mt-1">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                and
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
                apply.
              </small>
            </form>
          </div>

          {/* Footer */}
          <section className="footer footer-login">
            <div className="footer-top">
              {/* Footer Links */}
              <div className="footer-links">
                <nav className="navbar navbar-expand-sm">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/responsible-gaming" target="_blank" rel="noopener noreferrer">
                        Responsible Gaming
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Support Detail */}
              <div className="support-detail">
                <h2>24X7 Support</h2>
                <p></p>
              </div>

              {/* Social Icons */}
              <div className="social-icons-box"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
