import React from "react";

import "./login-page.styles.scss";

import { ReactComponent as Image1 } from "../../assets/loginPage-01.svg";
import { ReactComponent as Image2 } from "../../assets/loginPage-02.svg";
import { ReactComponent as Image3 } from "../../assets/loginPage-03.svg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign_in_username: "",
      sign_in_password: "",
      sign_up_username: "",
      sign_up_password: "",
      sign_up_email: "",
    };
  }

  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_in_btn.addEventListener("click", () => {
      container.classList.add("sign-in-mode");
      container.classList.remove("sign-up-mode");
    });

    sign_up_btn.addEventListener("click", () => {
      container.classList.remove("sign-in-mode");
      container.classList.add("sign-up-mode");
    });
  }

  userNameHandlerSignIn = (e, property) => {
    let val = String(e.target.value);
    let pattern = new RegExp("[^a-zA-Z]", "i");
    this.setState({
      sign_in_username: "",
    });
  };

  render() {
    return (
      <div id="LoginPage">
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form" action="">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      this.setState({
                        sign_in_username: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock"></i>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      this.setState({
                        sign_in_password: e.target.value,
                      });
                    }}
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <p className="social-media-text">
                  Or Sign in with social Platforms
                </p>
                <div className="social-media-icons">
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-google"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </form>
              <form className="sign-up-form" action="">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      this.setState({
                        sign_up_username: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      this.setState({
                        sign_up_email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock"></i>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      this.setState({
                        sign_up_password: e.target.value,
                      });
                    }}
                  />
                </div>
                <input type="submit" value="Sign Up" className="btn solid" />
                <p className="social-media-text">
                  Or Sign up with social Platforms
                </p>
                <div className="social-media-icons">
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-google"></i>
                  </a>
                  <a href="#!" className="social-media-icon">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New Here?</h3>
                <p>
                  Join our Digitalized Attendance Platform to have a seamless
                  online attendance expereince without much hassle.
                </p>

                <button className="btn transparent" id="sign-up-btn">
                  Sign Up
                </button>
              </div>
              <Image1 className="image" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Already Registered ?</h3>
                <p>
                  Its time to work more and worry less about attendance. We are
                  there for you !! Let's GET IT DONE
                </p>

                <button className="btn transparent" id="sign-in-btn">
                  Sign In
                </button>
              </div>
              <Image2 className="image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
