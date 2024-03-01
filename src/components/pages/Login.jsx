import axios from 'axios'
import { API_URL } from '../../constants/env'
 
const Login = () => {
 
    const handleSubmit = (e) => {
        e.preventDefault()
       
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post(`${API_URL}/public/login`, data)
        .then(resp => localStorage.setItem('token', resp.token.token))
        .catch(err => console.log(err))
           
       
    }
  return (
    <div className="pt-16 mas-w-256 m-auto">
        <form onSubmit={handleSubmit}>
 
        <input type="email" name="Email" placeholder="email" required/>
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}
 
export default Login