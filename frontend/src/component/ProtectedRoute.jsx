import { useAuth } from "../AuthContext"
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const {user} = useAuth();

    if (user) {
        return <Navigate to="/"/>
    }

    return element;
}

export default ProtectedRoute;