import { Card } from 'react-bootstrap'

const ExperienceCard = ({ name, imageExp }) => {

    return (
        <Card className="ExperienceCard">
            <Card.Img variant="top" src={imageExp} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard