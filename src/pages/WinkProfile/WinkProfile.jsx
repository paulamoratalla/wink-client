import { Container, Button } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import { useParams, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'



const WinkProfile = () => {

    const [profile, setProfile] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const { isLoggedIn } = useContext(AuthContext)

    const { _id } = useParams()



    useEffect(() => {

        usersService
            .getOneUser(_id)
            .then(({ data }) => {
                setProfile(data)
                setIsLoaded(true)
            })
            .then(err => console.log(err))
    }, [])


    return (
        isLoaded ?
            <Container>
                <h1>My Profile</h1>
                <h2>Soy Wink Profile</h2>
                {isLoggedIn}
                <hr />
                <ProfileCard {...profile} />
            </Container>
            :
            <Loader />
    )
}

export default WinkProfile
