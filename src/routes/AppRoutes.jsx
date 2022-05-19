import FeedPage from '../pages/FeedPage/FeedPage'
import ExperienceDetailsPage from '../pages/ExperienceDetailsPage/ExperienceDetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import ExperiencesPage from "../pages/ExperiencesPage/ExperiencesPage"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"
import ExperienceDetailsCard from "../components/ExperienceDetailsCard/ExperienceDetailsCard"
import WinkerCard from "../components/WinkerCard/WinkerCard"
import ProfileFormEdit from "../components/ProfileFormEdit/ProfileFormEdit"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/feed' element={<PrivateRoute />} >
                <Route path='' element={<FeedPage />} />
            </Route>
            <Route path='/experiences' element={<ExperiencesPage />} />
            <Route path='/experience/:_id' element={<PrivateRoute />} >
                <Route path='' element={<ExperienceDetailsPage />} />
            </Route>
            {/* <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route> */}
            <Route path="*" element={<h1>404 route not found</h1>} />
            {/* //Stripe prueba */}
            <Route path='/checkout' element={<CheckoutForm />} />
            <Route path='/experience-buy' element={<ExperienceDetailsCard />} />
            {/* PRUEBAS */}
            <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/winker-card' element={<WinkerCard />} />
            <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/:_id/edit-profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfileFormEdit />} />
            </Route>
        </Routes>
    )
}
export default AppRoutes