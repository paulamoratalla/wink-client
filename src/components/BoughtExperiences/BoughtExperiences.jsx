import { Card, Row } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import Loader from '../../components/Loader/Loader'
import './BoughtExperiences.css'


const BoughtExperiences = () => {
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
                        profile?.boughtExperiences.map(experience => {
                            return (
                                <div>
                                    <Card clasName='card' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={experience.profileImg} />
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

export default BoughtExperiences