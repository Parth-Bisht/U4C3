import { useContext } from "react"
import { Link, useLocation} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const RequiredAuth = ({children})=>{
    const {token} = useContext(AuthContext);
    const location = useLocation();

    if(token) return children

//   get the token from auth context and if token exists return the children otherwise return the follwoing
    return <h3>Please <Link to = "/login" state={{from:location}} replace>login</Link> to access this page</h3>
}