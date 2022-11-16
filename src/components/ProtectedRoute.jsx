import { Navigate, Outlet} from "react-router-dom"

const ProtectedRoute = ({isAllowed, children}) => {
 if (!isAllowed){
    return <Navigate to="/"/>
 }

  return children ? children : <Outlet/>
    
  
}

export default ProtectedRoute