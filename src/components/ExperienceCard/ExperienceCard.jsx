import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ExperienceCard = ({ _id, name, imageExp, price }) => {

    return (
        <Card className="ExperienceCard">
            <Card.Img variant="top" src={imageExp} alt={name} />
            <Card.Body>
                <Card.Title>{name} </Card.Title>
                <h3>{price}</h3>
                <Link to={`/experience/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">See Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard

