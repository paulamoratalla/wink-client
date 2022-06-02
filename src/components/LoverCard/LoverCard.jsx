import { Card, Row, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import usersService from '../../services/users.service'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
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
                <Row className='justify-content-around'>
                    <h4 className='lovertitle'>Matches</h4>
                    {
                        profile?.lovers?.map(lover => {
                            return (
                                < Col md={2}>
                                    <Card className="lovercard">
                                        <Link to={`/user/${lover._id}`}>
                                            <div className="card-img">
                                                <Card.Img className='loverpic' variant="top" src={lover.profileImg} alt={lover.name} />
                                            </div>
                                        </Link>
                                        <Card.Body><p>{lover.name}</p></Card.Body>
                                    </Card>
                                </Col >
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