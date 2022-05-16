import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProfileCard = ({ _id, profileImg, name, email, modality, birth, identity, city, interestedGender, heigth, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political }) => {

    return (
        <Card className="ProfileCard">
            <Card.Img variant="top" src={profileImg} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                <p className="card-text">{email}</p>
                <p className="card-text">{modality}</p>
                <p className="card-text">{birth}</p>
                <p className="card-text">{identity}</p>
                <p className="card-text">{city}</p>
                <p className="card-text">{interestedGender}</p>
                <p className="card-text">{heigth}</p>
                <p className="card-text">{exercise}</p>
                <p className="card-text">{zodiac}</p>
                <p className="card-text">{education}</p>
                <p className="card-text">{drink}</p>
                <p className="card-text">{smoke}</p>
                <p className="card-text">{lookingFor}</p>
                <p className="card-text">{children}</p>
                <p className="card-text">{religion}</p>
                <p className="card-text">{political}</p>

                <Link to={`/profile/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Edit Profile</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard