import { Card } from 'react-bootstrap'

const ProfileCard = ({ profileImg, name, email, password, modality, birth, identity, city, interestedGender, heigth, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political }) => {

    return (
        <Card className="ProfileCard">
            <Card.Img variant="top" src={profileImg} alt="Experience card details" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">{place}</h6>
                <p class="card-text">{descriptionExp}</p>
                <p class="card-text">{price}</p>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard


//gallery
//buttons edit my profile (form)
//Up to Winker-Premium (modality) en el form también????
//modify edit user route
