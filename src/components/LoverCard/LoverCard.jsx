import { Container, Button, Card, Row, Carousel, Col } from 'react-bootstrap'
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
                <Container lassName='carouselcontainer'>
                    <Carousel className="feedcarousel">
                        {
                            
                            profile?.lovers.map(lover => {
                                console.log('Esto es un loveeeer----------->', lover)
                                return (
                                    <>
                                        {/* <Carousel.Item className='carouselitem'>
                                            <div>
                                                <Card clasName='lovercard' style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src={lover.profileImg} />
                                                </Card>
                                            </div>
                                        </Carousel.Item> */}
                                       
                                    </>

                                )
                            })
                        }
                    </Carousel>
                </Container>
            </>
            :
            <Loader />

    )
}

export default LoverCard