import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ExperienceCard = ({ _id, name, imageExp, price }) => {

    return (
        <Card className="ExperienceCard m-1">
            <Link to={`/experience/${_id}`}>
                <div className="d-grid gap-2">
                    <Card.Img className='bg-image hover-zoom' variant="top" src={imageExp} alt={name} />
                </div>
            </Link>
            <Card.Body>
                <Card.Title>{name} </Card.Title>
                <h6>${price} USD</h6>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard

