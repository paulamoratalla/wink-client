import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import HomePage from '../pages/HomePage/HomePage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import LandingPage from '../pages/LandingPage/LandingPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import ExperiencesPage from "../pages/ExperiencesPage/ExperiencesPage"

import { Routes, Route } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import PrivateRoute from "./PrivateRoute"


const AppRoutes = () => {

    const { user } = useContext(AuthContext)


    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path="/signup" element={<SignupPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path='/home' element={<PrivateRoute />} >
                <Route path='' element={<HomePage />} />
            </Route>

            <Route path='/experiences/details' element={<PrivateRoute />} >
                <Route path='' element={<ExperienceDetailsPage />} />
            </Route>

            <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>404 route not found</h1>} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/experiences' element={<ExperiencesPage />} />
            <Route path='/experience/:id' element={<ExperienceDetailsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )


}



export default AppRoutes