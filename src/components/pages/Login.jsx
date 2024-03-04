import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoImage from "./../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

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
      .catch((err) => console.log(err));
  };
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-hull">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-4 pt-4"
                        src={logoImage}
                        alt="logo"
                      />
                      <h4>
                        <div className="text-center text-2xl font-bold">
                          Iniciar sesión
                        </div>
                      </h4>
                    </div>
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
                        <button type="submit" className="bg-gradient w-full text-white rounded-full">
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
                  </div>
                </div>
                <div className="bg-gradient lg:w-6/12 flex items-center lg:rouded-r-lg h-full">
                  <div>
                    <span>Mas que un e-commerce</span>
                    <h4>somos una tienda en linea </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
