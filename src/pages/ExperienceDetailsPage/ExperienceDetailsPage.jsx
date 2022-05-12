import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import experiencesService from '../../services/experiences.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'

function ExperienceDetailsPage() {

    const [experienceDetails, setExperienceDetails] = useState()

    const { experience_id } = useParams()

    useEffect(() => {
        experiencesService
            .getOneExperience(experience_id)
            .then(({ data }) => setExperienceDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        !experienceDetails
            ?
            <Loader />
            :
            <Container>
                <h1>{experienceDetails.name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>{experienceDetails.place}</h3>
                        <p>{experienceDetails.descriptionExp}</p>
                        <p>{experienceDetails.price}€</p>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={experienceDetails.imageExp} alt={experienceDetails.name} />
                    </Col>
                    <Link to="/">
                        <Button variant="dark">Back to experiences</Button>
                    </Link>
                </Row>
            </Container>
    )
}

export default ExperienceDetailsPage