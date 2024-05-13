import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Connexion");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login fonction exécutée", formData);

    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup fonction executée", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Inscription" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Votre Nom"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Adresse Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <button
          onClick={() => {
            state === "Connexion" ? login() : signup();
          }}
        >
          {" "}
          Continuer{" "}
        </button>
        {state === "Inscription" ? (
          <p className="loginsignup-login">
            {" "}
            Vous avez déjà un compte ?{" "}
            <span
              onClick={() => {
                setState("Connexion");
              }}
            >
              {" "}
              Se connecter !{" "}
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            {" "}
            Vous souhaitez créer un compte ?{" "}
            <span
              onClick={() => {
                setState("Inscription");
              }}
            >
              {" "}
              Cliquez ici !{" "}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
