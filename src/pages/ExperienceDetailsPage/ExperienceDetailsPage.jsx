import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import experiencesService from '../../services/experiences.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'
import { AuthContext } from '../../context/auth.context'



function ExperienceDetailsPage() {

    const [experienceDetails, setExperienceDetails] = useState({})

    const { experience_id } = useParams()

    useEffect(() => loadExperience(), [])

    const loadExperience = () => {
        experiencesService
            .getOneExperience(experience_id)
            .then(({ data }) => setExperienceDetails(data))
            .catch(err => console.log(err))

    }

    const { isLoading } = useContext(AuthContext)

    const { name, place, descriptionExp, price, imageExp } = experienceDetails


    return (
        isLoading
            ?
            <Loader />
            :
            <Container>
                <h1>{name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>{place}</h3>
                        <p>{descriptionExp}</p>
                        <p>{price}€</p>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={imageExp} alt={name} />
                    </Col>
                    <Link to="/">
                        <Button variant="dark">Back to experiences</Button>
                    </Link>
                </Row>
            </Container>
    )
}

export default ExperienceDetailsPage