import { Container, Button } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { AuthContext } from '../../context/auth.context'
import { useParams, Link } from 'react-router-dom'




const ProfilePage = () => {

    const [profile, setProfile] = useState([])

    const { user } = useContext(AuthContext)



    useEffect(() => {

        usersService
            .getOneUser(user._id)
            .then(({ data }) => setProfile(data))
            .then(err => console.log(err))
    }, [])


    const { isLoggedIn } = useContext(AuthContext)




    return (
        <Container>
            <h1>My Profile</h1>
            {isLoggedIn}
            <hr />
            <ProfileCard />
        </Container>
    )
}

export default ProfilePage