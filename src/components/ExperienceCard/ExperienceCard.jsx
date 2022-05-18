import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
const ExperienceCard = ({ _id, name, imageExp, price }) => {

    return (
        <div>
            <Card className="experiencecard">
                <Link to={`/experience/${_id}`}>
                    <div className="card-img">
                        <Card.Img className='bg-image hover-zoom' variant="top" src={imageExp} alt={name} />
                    </div>
                </Link>
                <Card.Body className='text-body'>
                    <Card.Text className='experiencecardtitle'>{name}</Card.Text>
                </Card.Body>
            </Card>
        </div>

=======

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
>>>>>>> e23bbaae7ce807e54572f94fb07865706d78a0d1
    )
}

export default ExperienceCard

