import axios from "axios";
import { API_URL } from "../../constants/env";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate";
 
const Register = () => {
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
      details:{
        fullname: e.target.fullname.value,
      }
    };
    axios
      .post(`${API_URL}/public/login`, data)
      .then(() => {
        nav("/login");
      })
 
      .catch((err) => {
        console.log(err)
        setError(err);
 
      });
  };
 
 
  return (
    <LoginTemplate title="Registarte">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <input
            type="text"
            placeholder="Noombre completo"
            name="fullname"
            required
            className="py-2 px-4 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electronico"
            name="email"
            required            
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required            
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button type="submit" className="bg-gradient w-full text-white rounded-full">
            Crear Cuenta
          </button>
          <Link className=" text-gray " to="/login">¿Ya tienes cuenta?</Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-600">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
      </ LoginTemplate>
      );
}
export default Register;
 