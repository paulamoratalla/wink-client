import { Container, Card, Button } from 'react-bootstrap'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useState } from 'react';
import './ExperienceDetailsCard.css'

const ExperienceDetailsCard = ({ name, place, price, imageExp, descriptionExp }) => {

    const [showExperience, setShowExperience] = useState(false);

    return (
        <Container>
            <Card className="ExperienceDetailsCard">
                <Card.Img className='expImg' variant="top" src={imageExp} alt="Experience card details" />
                <Card.Body>
                    <Card.Title className="ExperienceDetailsCard" >{name} Pruebaaaaa</Card.Title>
                    {showExperience ? (
                        <CheckoutForm />
                    ) : (
                        <>
                            <h6 className="ExperienceDetailsCard" class="card-subtitle mb-2 text-muted">{place}</h6>
                            <p className="ExperienceDetailsCard" class="card-text">{descriptionExp}</p>
                            <p class="card-text">{price} $10.00</p>
                            <Button className="ExperienceDetailsCard" onClick={() => setShowExperience(true)}>Buy experience</Button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ExperienceDetailsCard

