import { Card, Container, Row, Col, Button, Carousel } from "react-bootstrap"
import usersService from '../../services/users.service'
import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"


const WinkerCard = () => {

    const [winkers, setWinkers] = useState([])


    useEffect(() => loadWinkers(), [])

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


    // console.log('---->', winkers)


    return (
        winkers.length
            ?
            <Container>

                <Row>
                    {
                        winkers.map(data => {
                            return (
                                <>
                                    <Col md={{ span: 6 }}>
                                        <Card>
                                            <Card.Img className='bg-image hover-zoom' variant="top" src={data.profileImg} alt={data.name} />
                                        </Card>
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                        <Card className="m-2">
                                            <Card.Body>
                                                <Card.Title>{data.name} </Card.Title>
                                                <Card.Text>From: {data.city}</Card.Text>
                                                <Card.Text>Born in: {data.birth}</Card.Text>
                                                <Card.Text>Gender: {data.identity}</Card.Text>
                                                <Card.Text>Interested in: {data.interestedGender}</Card.Text>
                                                <Card.Text>Height: {data.features.height}</Card.Text>
                                                <Card.Text>Excercise: {data.features.exercise}</Card.Text>
                                                <Card.Text>Zodiac sign: {data.features.zodiac}</Card.Text>
                                                <Card.Text>Education level: {data.features.education}</Card.Text>
                                                <Card.Text>Drink: {data.features.drink}</Card.Text>
                                                <Card.Text>Smoke: {data.features.smoke}</Card.Text>
                                                <Card.Text>Looking for: {data.features.lookingFor}</Card.Text>
                                                <Card.Text>Religion: {data.features.religion}</Card.Text>
                                                <Card.Text>Political: {data.features.political}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Button onClick={() => addToMatch(data._id)} >Match</Button>
                                    </Col>
                                </>

                            )
                        })
                    }
                </Row>
            </Container>
            :
            <Loader />
    )

}

export default WinkerCard