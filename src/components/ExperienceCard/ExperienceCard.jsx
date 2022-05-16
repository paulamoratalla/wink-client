import { Card } from 'react-bootstrap'

const ExperienceCard = ({ name, imageExp }) => {

    return (
        <Card className="ExperienceCard">
            <Card.Img variant="top" src={imageExp} alt={name} />
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