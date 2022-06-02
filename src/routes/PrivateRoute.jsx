import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"

const PrivateRoute = () => {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute