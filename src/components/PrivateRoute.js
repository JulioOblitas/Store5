

import { useContext } from "react"
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
    const { user } = useContext(AuthContext);
    console.log("mostrado user", user);
    return  user !==null? props.children : <Navigate  to="/login" />    

     
}
