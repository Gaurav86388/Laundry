import { createContext, useContext, useState } from "react";

const renderContext = createContext()

export function useRender(){
    return useContext(renderContext)
}



export default function RenderContextProvider({children}){
    const [render, setRender] = useState('createOrder')
    const [showAlert, setShowAlert] = useState("")
    const [showSummary, setShowSummary] = useState(false)
    const [laundryCart, setLaundryCart] = useState([])
    const [cancelAlert, setCancelAlert] = useState()
    const [username, setUsername] = useState("")


 

      function onHandleRender(command){

                setRender(command)
  }



    return <renderContext.Provider value={{render, 
    onHandleRender, showAlert, setShowAlert, showSummary, setShowSummary,
    laundryCart, setLaundryCart, cancelAlert, setCancelAlert,
    username, setUsername
    }}>

            {children}
    </renderContext.Provider>
}