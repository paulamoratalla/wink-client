<<<<<<< HEAD
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
=======
import { Container, Button, Card, Row, Carousel, Col } from 'react-bootstrap'
>>>>>>> 494482b47363b3b81b9f4d808f612a03f6d68c3e
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
                    <h4 className='lovertitle'>Matches</h4>
                    {
                        profile?.lovers.map(lover => {
                            return (
                                // <div>
                                //     <Card clasName='lovercard' style={{ width: '18rem' }}>
                                //         <Card.Img variant="top" src={lover.profileImg} />
                                //     </Card>
                                // </div>
                                < Col md={2}>
                                    <Card className="lovercard">
                                        <Link to={`/user/${lover._id}`}>
                                            <div className="card-img">
                                                <Card.Img className='loverpic' variant="top" src={lover.profileImg} alt={lover.name} />

                                            </div>
                                        </Link>
                                        {/* <Card.Body>
                                            <p>{lover.name}</p>
                                        </Card.Body> */}
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


