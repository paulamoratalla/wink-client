import LoginPage from "../components/pages/LoginPage/LoginPage"
import SignupPage from "../components/pages/SignupPage/SignupPage"
import HomePage from '../pages/HomePage/HomePage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import LandingPage from '../pages/LandingPage/LandingPage'
import ProfilePage from '../pages/ProfilePage'


import { Routes, Route } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'



const AppRoutes = () => {

    const { user } = useContext(AuthContext)


    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>404 route not found</h1>} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/experiences/details' element={<ExperienceDetailsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )


}



export default AppRoutes