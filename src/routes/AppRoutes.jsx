import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import FeedPage from '../pages/FeedPage/FeedPage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import ExperiencesPage from "../pages/ExperiencesPage/ExperiencesPage"


import { Routes, Route } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import PrivateRoute from "./PrivateRoute"
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"
import ExperienceDetailsCard from "../components/ExperienceDetailsCard/ExperienceDetailsCard"
import HomePage from "../pages/HomePage/HomePage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ProfileForm from "../components/ProfileForm/ProfileForm"



const AppRoutes = () => {

    const { user } = useContext(AuthContext)


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path="/signup" element={<SignupPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path='/feed' element={<PrivateRoute />} >
                <Route path='' element={<FeedPage />} />
            </Route>

            <Route path='/experiences' element={<ExperiencesPage />} />

            <Route path='/experiences/:experienceId' element={<PrivateRoute />} >
                <Route path='' element={<ExperienceDetailsPage />} />
            </Route>

            <Route path='/experiences' element={<PrivateRoute />} >
                <Route path='' element={<ExperiencesPage />} />
            </Route>
            <Route path='/experience/:_id' element={<PrivateRoute />} >
                <Route path='' element={<ExperienceDetailsPage />} />
            </Route>

            <Route path='/profile' element={<ProfilePage />}></Route>

            <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>404 route not found</h1>} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/experiences' element={<ExperiencesPage />} />
            <Route path='/experience/:id' element={<ExperienceDetailsPage />} />
            <Route path='/experiences/details' element={<ExperienceDetailsPage />} />

            <Route path='/profile' element={<ProfilePage />} />

            <Route path="*" element={<h1>404 route not found</h1>} />
            {/* //Stripe prueba */}
            <Route path='/checkout' element={<CheckoutForm />} />
            <Route path='/experience-buy' element={<ExperienceDetailsCard />} />

            {/* PRUEBAS */}

            <Route path='/profile-form' element={<ProfileForm />} />


        </Routes>
    )


}


export default AppRoutes