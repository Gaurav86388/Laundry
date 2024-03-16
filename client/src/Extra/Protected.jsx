import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Protected = ({children}) => {

    const token = localStorage.getItem("jwt")
    const navigate = useNavigate()

    if(!token){
        return navigate("/")
    }
    else{
        return children
    }

  
}

export default Protected