import React, { useRef, useState } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();
  const usernameInput = useRef();

  const navigate = useNavigate();

  const checkFormValidHandler = () => {
    if (
      emailInput.current.value === "" ||
      passwordInput.current.value === "" ||
      passwordInput.current.value.length < 6 ||
      usernameInput.current.value === ""
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

    const signupAPI = "http://localhost:3000/api/auth/signup";
    const signupData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
      username: usernameInput.current.value,
    };

    fetch(signupAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          alert(data.message || "Registration successful");
          setTimeout(() => {
            navigate('/auth?form=login');
          }, 2000);
        } else {
          alert(data.message || "Registration failed");
        }
        return data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        alert("An error occurred during registration");
      });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Signup</h1>
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
              ref={passwordInput}
              onChange={checkFormValidHandler}
              minLength={6}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              ref={usernameInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="username">Username</label>
          </div>
          <button type="submit" className="button">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
