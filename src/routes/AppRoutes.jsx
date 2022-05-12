import LoginPage from "../components/pages/LoginPage/LoginPage"
import { Routes, Route } from "react-router-dom"
import SignupPage from "../components/pages/SignupPage/SignupPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>404 route not found</h1>} />
        </Routes>
    )
}

export default AppRoutes