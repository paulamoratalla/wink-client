import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./ProfileCard.css"


const ProfileCard = ({ _id, profileImg, name, email, modality, birth, identity, city, interestedGender, features }) => {

    const { height, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = features

    const newDate = birth.slice(0, 10)


    return (
        <Card className="ProfileCard">
            <Card.Img className="profile-img" variant="top" src={profileImg} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6 className="card-subtitle mb-2 text-muted">{modality}</h6>
                <p className="card-text-profile-card">{email}</p>
                <p className="card-text-profile-card">Date of birth: {newDate}</p>
                <p className="card-text-profile-card">Gender: {identity}</p>
                <p className="card-text-profile-card">City: {city}</p>
                <p className="card-text-profile-card">Interested in: {interestedGender}</p>
                <p className="card-text-profile-card">Height: {height}</p>
                <p className="card-text-profile-card">Exercise practice: {exercise}</p>
                <p className="card-text-profile-card">Zodiac sign: {zodiac}</p>
                <p className="card-text-profile-card">Educational level: {education}</p>
                <p className="card-text-profile-card">Alcohol habit: {drink}</p>
                <p className="card-text-profile-card">Tobacco habit: {smoke}</p>
                <p className="card-text-profile-card">Looking for: {lookingFor}</p>
                <p className="card-text-profile-card">About starting a family/ Having children: {children}</p>
                <p className="card-text-profile-card">Religious belief: {religion}</p>
                <p className="card-text-profile-card">Political ideology: {political}</p>

            </Card.Body>
        </Card>
    )
}

export default ProfileCard
