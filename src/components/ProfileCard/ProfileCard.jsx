import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProfileCard = ({ _id, profileImg, name, email, modality, birth, identity, city, interestedGender, features }) => {

    const { height, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = features

    const newDate = birth.slice(0, 10)

    return (
        <Card className="ProfileCard">
            <Card.Img variant="top" src={profileImg} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6 className="card-subtitle mb-2 text-muted">{modality}</h6>
                <p className="card-text">{email}</p>
                <p className="card-text">Date of birth: {newDate}</p>
                <p className="card-text">Identity: {identity}</p>
                <p className="card-text">City: {city}</p>
                <p className="card-text">Interested in: {interestedGender}</p>
                <p className="card-text">Height: {height}</p>
                <p className="card-text">Exercise practice: {exercise}</p>
                <p className="card-text">Zodiac sign: {zodiac}</p>
                <p className="card-text">Educational level: {education}</p>
                <p className="card-text">Alcohol habit: {drink}</p>
                <p className="card-text">Tobacco habit: {smoke}</p>
                <p className="card-text">Looking for: {lookingFor}</p>
                <p className="card-text">About starting a family/ Having children: {children}</p>
                <p className="card-text">Religious belief: {religion}</p>
                <p className="card-text">Political ideology: {political}</p>

                <Link to={`/feed`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Go to my Feed</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard