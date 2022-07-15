import React from "react";
import { useState } from "react";
import logo from "../images/icons/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    
  });

  //const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    //передать функцию
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="логотип" className="header__logo" />
        <Link to="/sign-up" className="header__btn">
          Регистрация
        </Link>
      </header>
      <section className="auth">
        <form className="auth__form" action="#" method="post" onSubmit={handleSubmit}>
          <h2 className="auth__title">Вход</h2>
          <section className="auth__form-section">
            <input
              className="auth__input auth__input_type_email"
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              minLength="2"
              maxLength="40"
              required
            />
          </section>
          <section className="auth__form-section">
            <input
              className="auth__input popup__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              value={data.password}
              onChange={handleChange}
              required
            />
          </section>
          <button type="submit" className="auth__save">
            Войти
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
