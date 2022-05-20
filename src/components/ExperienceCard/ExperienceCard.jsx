import './ExperienceCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ExperienceCard = ({ _id, name, imageExp, price }) => {

    return (
        <div className='d-flex justify-content-center'>
            <Card className="experiencecard ">
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

    )
}

export default ExperienceCard

