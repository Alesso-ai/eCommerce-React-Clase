import axios from 'axios'
import { API_URL } from '../../constants/env'
import { setToken } from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

 
const Login = () => {

  // Utilizar redirecciones de React Router 
  const nav = useNavigate()

  //manejo del estado: errores

  const [error, setError] = useState()

 
    const handleSubmit = (e) => {
        e.preventDefault()
       setError()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios
        .post(`${API_URL}/public/login`, data)
        .then(resp =>{
            setToken(resp.data.data.token)
            nav("/")
        
        })
        .catch(err => console.log(err))
           
       
    }
  return (
    <div className="pt-16 mas-w-256 m-auto">
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" required/>
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}
 
export default Login