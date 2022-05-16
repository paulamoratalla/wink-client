import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ExperienceCard = ({ name, imageExp, id }) => {

    return (
        <Card className="ExperienceCard">
            <Card.Img variant="top" src={imageExp} alt="Experience card" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/experience/${id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">See Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard