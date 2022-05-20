import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import experiencesService from '../../services/experiences.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'
import { AuthContext } from '../../context/auth.context'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import './ExperienceDetailsPage.css'


function ExperienceDetailsPage() {

    const [showExperience, setShowExperience] = useState(false)

    const [experienceDetails, setExperienceDetails] = useState({})

    const { _id } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadExperience(), [_id])

    const loadExperience = () => {
        experiencesService
            .getOneExperience(_id)
            .then(({ data }) => setExperienceDetails(data))
            .catch(err => console.log(err))

    }

    const deleteExperience = (id) => {
        experiencesService
            .deleteOneExperience(id)
            .then(() => {
                navigate('/experiences')
            })
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
                <h1 className='d-flex justify-content-center ExperienceDetailsPage'>{name}</h1>
                <hr className='mb-5' />
                {showExperience ?
                    <CheckoutForm />
                    :
                    <Row >
                        <Col className='mb-3' md={{ span: 4, offset: 1 }}>
                            <h3 className='ExperienceDetailsPage'>{place}</h3>
                            <p className='ExperienceDetailsPage'>{descriptionExp}</p>
                            <p className='ExperienceDetailsPage'>${price} USD</p>
                            <Button className='boton-comprar m-3 ExperienceDetailsPage' onClick={() => setShowExperience(true)}>Buy experience</Button>
                            <Link to="/experiences">
                                <Button className='boton-regresar m-3 ExperienceDetailsPage' variant="dark">Back to experiences</Button>
                            </Link>

                            {/* <Button className='mb-5' variant="dark" onClick={() => deleteExperience(_id)}>Delete experience</Button> */}

                        </Col>
                        <Col className='mb-3 ' md={{ span: 6 }}>
                            <img className='ExperienceDetailsPage' style={{ width: '100%' }} src={imageExp} alt={name} />
                        </Col>

                    </Row>
                }
            </Container>
    )
}

export default ExperienceDetailsPage