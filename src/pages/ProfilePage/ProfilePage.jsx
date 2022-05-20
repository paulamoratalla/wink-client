import { Container, Button, Col, Row } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import { useParams, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import GalleryProfile from '../../components/GalleryProfile/GalleryProfile'



const ProfilePage = () => {

    const [profile, setProfile] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const { user, isLoggedIn } = useContext(AuthContext)


    useEffect(() => {

        usersService
            .getOneUser(user._id)
            .then(({ data }) => {
                setProfile(data)
                setIsLoaded(true)
            })
            .then(err => console.log(err))
    }, [])


    return (
        isLoaded ?
            <Container className='my-profile mt-3'>
                <h1>My Profile</h1>
                {isLoggedIn}
                <hr />
                <Row>
                    <Col md={4}>
                        <ProfileCard {...profile} />
                    </Col>
                    <Col md={8}>
                        <GalleryProfile {...profile} />
                    </Col>
                </Row>
            </Container>
            :
            <Loader />
    )
}

export default ProfilePage
