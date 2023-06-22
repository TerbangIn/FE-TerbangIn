import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const Authmiddleware = ({component}) => {
    const Component = component
    const cookies = new Cookies()

  const token = cookies.get('token')
  const navigate = useNavigate()

  useEffect(() => {
    if(!(token)) {
    return navigate("/")
  }
  }, [token])

  return <Component />

    
}

export default Authmiddleware