import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import LandingPage from '../pages/LandingPage/LandingPage'
import ProfilePage from '../pages/ProfilePage'

import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

const AppRoutes = () => {

    const { user } = useContext(AuthContext)

    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/experiences/details' element={<ExperienceDetailsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}

export default AppRoutes