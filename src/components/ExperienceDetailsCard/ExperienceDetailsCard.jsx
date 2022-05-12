import { Card } from 'react-bootstrap'

const ExperienceDetailsCard = ({ name, place, price, imageExp, descriptionExp }) => {

    return (
        <Card className="ExperienceDetailsCard">
            <Card.Img variant="top" src={imageExp} alt="Experience card details" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">{place}</h6>
                <p class="card-text">{descriptionExp}</p>
                <p class="card-text">{price}</p>
            </Card.Body>
        </Card>
    )
}

export default ExperienceDetailsCard

