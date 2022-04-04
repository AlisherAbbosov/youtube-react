import React from "react";

import "./LoginPage.scss";
import Iphone from "../../../Assets/Images/iPhone.png";
import Logo from "../../../Components/Lib/Icons/Login/Black.png";
import Google from "../../../Components/Lib/Icons/Login/google.svg";
import AppStore from "../../../Components/Lib/Icons/Login/app-store.svg";
import GooglePlay from "../../../Components/Lib/Icons/Login/google-play.svg";

import { Context } from "../../../Content/Authentication";

const Login = () => {
  const { setToken } = React.useContext(Context);
  const HandleSubmit = evt => {
    evt.preventDefault();
    const { user_email, user_password } = evt.target.elements;

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user_email.value.trim(),
        password: user_password.value.trim(),
      }),
    })
      .then(response => response.json())
      .then(data => setToken(data?.token));
  };

  return (
    <div className="login__container">
      <div className="login__img-box">
        <img className="login__img" src={Iphone} alt="phoneimage" />
      </div>

      <div>
        <div className="login__wrap">
          <img className="login__logo" src={Logo} alt="Site logo" />

          <form className="login__form" onSubmit={HandleSubmit}>
            <input
              className="login__inputs"
              type="email"
              name="user_email"
              defaultValue="eve.holt@reqres.in"
            />

            <input
              className="login__inputs"
              type="password"
              name="user_password"
              defaultValue="cityslicka"
            />

            <button className="login__btn">Login</button>
          </form>

          <p className="login__or">OR</p>

          <button className="login__google-btn">
            <img className="login__google-icon" src={Google} alt="google" />
            <p>Log in with Google</p>
          </button>

          <p className="login__forgot">Forgot Password?</p>
          <p className="login__sing">Don’t have an account? Sign Up</p>
        </div>

        <p className="login__get">Get the App.</p>
        <div className="login__btns-box">
          <a
            href="https://apps.apple.com/us/app/youtube-watch-listen-stream/id544007664"
            className="login__btns login__btns-app"
            target="blank"
          >
            <img className="login__btns-icons" src={AppStore} alt="app" />
            <p>App Store</p>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=ru&gl=US"
            className="login__btns login__btns-google"
            target="blank"
          >
            <img className="login__btns-icons" src={GooglePlay} alt="app" />
            <p>Google Play</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
