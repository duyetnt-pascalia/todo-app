import React, { useRef, useState } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext";

const LoginForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();

  const navigate = useNavigate();
  const {login} = useAuth();

  const checkFormValidHandler = () => {
    if (
      emailInput.current.value === "" ||
      passwordInput.current.value === "" ||
      passwordInput.current.value.length < 6
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const loginAPI = "http://localhost:3000/api/auth/login";
    const loginData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    fetch(loginAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 200) {
          alert(data.message || "Login successful");
          login(data)
          return data;
        } else {
          throw new Error(data.message || "Login failed");
        }
      })
      .then((data) => {
        console.log(data);
        navigate('/', {replace: true});
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={submitHanlder}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              ref={emailInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              minLength={6}
              ref={passwordInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
