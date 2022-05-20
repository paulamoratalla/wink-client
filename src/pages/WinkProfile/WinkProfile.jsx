import { Container, Button, Col, Row } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import { useParams, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import GalleryWinkProfile from '../../components/GalleryWinkProfile/GalleryWinkProfile'



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
            <Container className="wink-profile mt-3">
                <h2>Winker | {profile.name}</h2>
                {isLoggedIn}
                <hr />
                <Row>
                    <Col md={4}>

                        <ProfileCard {...profile} />
                    </Col>
                    <Col md={8}>

                        <GalleryWinkProfile {...profile} />
                    </Col>

                </Row>
            </Container>
            :
            <Loader />

    )
}

export default WinkProfile
