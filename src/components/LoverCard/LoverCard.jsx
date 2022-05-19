import { Container, Button, Card, Row } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import { useParams, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import './LoverCard.css'


const LoverCard = () => {
    const [profile, setProfile] = useState()
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
        profile ?
            <>
                <Row>
                    {
                        profile?.lovers.map(lover => {
                            return (
                                <div>
                                    <Card clasName='lovercard' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={lover.profileImg} />
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Row>
            </>
            :
            <Loader />

    )
}

export default LoverCard