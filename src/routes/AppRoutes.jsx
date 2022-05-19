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
import WinkProfile from "../pages/WinkProfile/WinkProfile"
import GalleryProfileForm from "../components/GalleryProfileForm/GalleryProfileForm"
import { URL } from '../constants/navigation'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={URL.HOMEPAGE} element={<HomePage />} />
            <Route path={URL.FEED} element={<PrivateRoute />} >
                <Route path='' element={<FeedPage />} />
            </Route>
            <Route path={URL.EXPERIENCES} element={<ExperiencesPage />} />
            <Route path='/experience/:_id' element={<PrivateRoute />} >
                <Route path='' element={<ExperienceDetailsPage />} />
            </Route>
            <Route path='/winker-card' element={<WinkerCard />} />
            <Route path='/profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/:_id/edit-profile' element={<PrivateRoute />} >
                <Route path='' element={<ProfileFormEdit />} />
            </Route>
            <Route path='/:_id/profile' element={<PrivateRoute />} >
                <Route path='' element={<WinkProfile />} />
            </Route>
            <Route path='/:_id/upload-images' element={<PrivateRoute />} >
                <Route path='' element={<GalleryProfileForm />} />
            </Route>

            <Route path="*" element={<h1>404 route not found</h1>} />
            {/* //Stripe prueba */}
            <Route path='/checkout' element={<CheckoutForm />} />
            <Route path='/experience-buy' element={<ExperienceDetailsCard />} />

        </Routes>
    )
}
export default AppRoutes