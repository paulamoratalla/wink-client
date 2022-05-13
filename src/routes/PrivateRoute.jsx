import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"
// import { MessageContext } from "../context/message.context"


const PrivateRoute = () => {

    const { isLoggedIn, isLoading } = useContext(AuthContext)
    // const { showMessage } = useContext(MessageContext)

    if (isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        // showMessage('Unauthorized', 'please login to continue')
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute