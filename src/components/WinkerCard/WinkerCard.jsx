import { Link } from 'react-router-dom'
import { Card, Container, Row, Col, Button, Carousel, NavLink } from "react-bootstrap"
import usersService from '../../services/users.service'
import { useState, useEffect, useContext } from "react"
import Loader from "../Loader/Loader"
import './WinkerCard.css'
import { AuthContext } from "../../context/auth.context"
import { FaHeart } from 'react-icons/fa'


const WinkerCard = () => {

    const [winkers, setWinkers] = useState([])
    const [myUser, setMyUser] = useState({})


    useEffect(() => {
        loadWinkers()
        loadMyUser()
    }, [])

    const { user } = useContext(AuthContext)

    const loadWinkers = () => {

        usersService
            .getAllUsers()
            .then(({ data }) => { setWinkers(data) })
            .catch(err => console.log(err))
    }


    const addToMatch = (_id) => {

        usersService
            .addToMatch(_id)
            .catch(err => console.log(err))

    }

    const loadMyUser = () => {

        usersService
            .getOneUser(user._id)
            .then(({ data }) => { setMyUser(data) })
            .catch(err => console.log(err))
    }


    const filteredUsers = winkers.filter(elm => elm._id !== user._id) // todos los users menos yo

    const notMatchedUsers = filteredUsers?.filter(elm => {

        const myUserMatches = myUser?.matches?.map(mat => mat._id)
        const hasMatch = myUserMatches?.includes(elm._id)

        return !hasMatch

        // console.log('MI UUSUARIO', myUser.matches)
        // console.log('MI ID', elm._id)
        // // !myUser?.matches?.includes(elm._id)
    }) // todos los users que no tengo en mis matches (no funchiona)


    return (
        notMatchedUsers.length
            ?
            <Container className='carouselcontainer'>
                <Carousel className="feedcarousel">
                    {
                        notMatchedUsers.map(data => {
                            return (

                                <Carousel.Item className='carouselitem'>
                                    <img
                                        className="d-block img-winker"
                                        src={data.profileImg}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <Container>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <Link className='h-winker' to={`/${data._id}/profile`}><h3 className='h-winker'>{data.name}</h3></Link>
                                                    <hr />
                                                </Col>
                                                <Col>
                                                    <p className='p-winker' >{data.features.height}</p>
                                                    <p className='p-winker' >{data.features.exercise}</p>
                                                    <p className='p-winker' >{data.features.zodiac}</p>
                                                    <p className='p-winker' >{data.features.education}</p>
                                                    <p className='p-winker' >{data.features.smoke}</p>
                                                    <p className='p-winker' >{data.features.smoke}</p>
                                                    <p className='p-winker' >{data.features.lookingFor}</p>
                                                    <Button className='matchbutton ' onClick={() => addToMatch(data._id)} ><FaHeart /> Match</Button>
                                                </Col>
                                                <Col>
                                                    <br />
                                                    <p className='p-winker'>{data.birth.slice(0, 10)}</p>
                                                    <p className='p-winker' >{data.interestedGender}</p>
                                                    <p className='p-winker' >{data.city}</p>
                                                    <p className='p-winker' >{data.features.children}</p>
                                                    <p className='p-winker' >{data.features.religion}</p>
                                                    <p className='p-winker' >{data.features.political}</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })

                    }
                </Carousel>
            </Container>

            :
            <Loader />

    )

}

export default WinkerCard






