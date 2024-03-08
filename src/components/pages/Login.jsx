import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate";

const Login = () => {
  // Utilizar redirecciones de React Router
  const nav = useNavigate();

  //manejo del estado: errores

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post(`${API_URL}/public/login`, data)
      .then((resp) => {
        setToken(resp.data.data.token);
        nav("/");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };
  return (
    <LoginTemplate title="Iniciar Sesion">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electronico"
            name="email"
            required
            className="py-2 px-4 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            className="py-2 px-4 rounded-md"
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button
            type="submit"
            className="bg-gradient w-full text-white rounded-full"
          >
            Ingresar
          </button>
          <Link className=" text-gray ">¿Desea registrarte?</Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-600">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Login;
