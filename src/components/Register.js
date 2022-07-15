import React from "react";
import { useState } from "react";
import logo from "../images/icons/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
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
    if (data.password === data.confirmPassword) {
      let { email, password } = data;
    }
    //передать функцию
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="логотип" className="header__logo" />
        <Link to="/sign-in" className="header__btn">
          Вход
        </Link>
      </header>
      <section className="auth">
        <form className="auth__form" action="#" method="post" onSubmit={handleSubmit}>
          <h2 className="auth__title">Регистрация</h2>
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
            Зарегистрироваться
          </button>
          <div className="auth__question">
            <p className="auth__question-text">Уже зарегистрированы?&nbsp;</p>
            <Link to="/sign-in" className="auth__question-link">
            Войти
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;