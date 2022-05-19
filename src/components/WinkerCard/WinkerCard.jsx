import { Card, Container, Row, Col, Button, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import usersService from '../../services/users.service'
import { useState, useEffect, useContext } from "react"
import Loader from "../Loader/Loader"
import './WinkerCard.css'
import { AuthContext } from "../../context/auth.context"


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

    console.log('FINALMENTE:', notMatchedUsers)

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
                                        className="d-block"
                                        src={data.profileImg}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <Link to={`/${data._id}/profile`}><h3>{data.name}</h3></Link>
                                        <p>{data.birth}</p>
                                        <p>{data.city}</p>
                                        <p>{data.interestedGender}</p>
                                        <p>{data.city}</p>
                                        <p>{data.features.height}</p>
                                        <p>{data.features.exercise}</p>
                                        <p>{data.features.zodiac}</p>
                                        <p>{data.features.education}</p>
                                        <p>{data.features.drink}</p>
                                        <p>{data.features.smoke}</p>
                                        <p>{data.features.drink}</p>
                                        <p>{data.features.smoke}</p>
                                        <p>{data.features.lookingFor}</p>
                                        <p>{data.features.children}</p>
                                        <p>{data.features.religion}</p>
                                        <p>{data.features.political}</p>
                                        <Button className='matchbutton' onClick={() => addToMatch(data._id)} >Match</Button>
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






