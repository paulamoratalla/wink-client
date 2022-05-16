import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadService from "../../services/upload.service"
import usersService from "../../services/users.service"



const ProfileForm = ({ fireFinalActions }) => {
    const [profileData, setProfileData] = useState({
        profileImg: '',
        name: '',
        email: '',
        password: '',
        modality: '',
        birth: '',
        identity: '',
        city: '',
        interestedGender: '',
        heigth: 0,
        exercise: '',
        zodiac: '',
        education: '',
        drink: '',
        smoke: '',
        lookingFor: '',
        children: '',
        religion: '',
        political: '',
    })
    const [loadingImage, setLoadingImage] = useState(false)
    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setProfileData({
            ...profileData,
            [name]: value
        })
    }
    const handleImageUpload = e => {
        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileData({ ...profileData, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleCheckedChange = e => {
        const { name, checked } = e.target
        setProfileData({
            ...profileData,
            [name]: checked
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

            .userDefault()
            .saveUser(profileData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }
    const { name, email, modality, birth, identity, city, interestedGender, height, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = profileData
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="profileImg">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
                <Form.Text className="text-muted">We accept JPGs and PNGs of at least 500x500px</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modality">
                <Form.Label>Wink Plan</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={modality} onChange={handleCheckedChange} name="modality">
                    <option value="field1">Winker</option>
                    <option value="field2">Winker-Premium</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="birth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={birth} onChange={handleInputChange} name="birth" />
                <Form.Text className="text-muted">You must be at least 18 years old to use Wink</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="identity">
                <Form.Label>Identity</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={identity} onChange={handleCheckedChange} name="identity">
                    <option value="field1">Man</option>
                    <option value="field2">Woman</option>
                    <option value="field3">Non-binary</option>
                    <option value="field3">Gender-fluid</option>
                    <option value="field3">Other</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={city} onChange={handleInputChange} name="city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="interestedGender">
                <Form.Label>Interested in</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={interestedGender} onChange={handleCheckedChange} name="interestedGender">
                    <option value="field1">Men</option>
                    <option value="field2">Women</option>
                    <option value="field3">Everyone</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="height">
                <Form.Label>Height</Form.Label>
                <Form.Control type="number" value={height} onChange={handleInputChange} name="height" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exercise">
                <Form.Label>Exercise practice</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={exercise} onChange={handleCheckedChange} name="exercise">
                    <option value="field1">I am very active & I love sports</option>
                    <option value="field2">Sometimes I exercise</option>
                    <option value="field3">Almost never or never</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="zodiac">
                <Form.Label>Zodiac sign</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={zodiac} onChange={handleCheckedChange} name="zodiac">
                    <option value="field1">Aries</option>
                    <option value="field2">Taurus</option>
                    <option value="field3">Gemini</option>
                    <option value="field3">Cancer</option>
                    <option value="field3">Leo</option>
                    <option value="field3">Virgo</option>
                    <option value="field3">Libra</option>
                    <option value="field3">Scorpio</option>
                    <option value="field3">Saggitarius</option>
                    <option value="field3">Capricorn</option>
                    <option value="field3">Aquarius</option>
                    <option value="field3">Pisces</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="education">
                <Form.Label>Educational level</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={education} onChange={handleCheckedChange} name="education">
                    <option value="field1">High School</option>
                    <option value="field2">In College</option>
                    <option value="field3">Undergraduate Degree</option>
                    <option value="field3">Graduate Degree</option>
                    <option value="field3">Postgraduate Studies</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="drink">
                <Form.Label>Alcohol habit</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={drink} onChange={handleCheckedChange} name="drink">
                    <option value="field1">I usually drink socially</option>
                    <option value="field2">I never drink alcohol</option>
                    <option value="field3">I enjoy drinking a beer/glass of wine most days</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="smoke">
                <Form.Label>Tobacco habit</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={smoke} onChange={handleCheckedChange} name="smoke">
                    <option value="field1">I only smoke socially</option>
                    <option value="field2">I hate tobacco</option>
                    <option value="field3">I smoke</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lookingFor">
                <Form.Label>Looking for</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={lookingFor} onChange={handleCheckedChange} name="lookingFor">
                    <option value="field1">Meet new people</option>
                    <option value="field2">Something casual</option>
                    <option value="field3">A love relationship</option>
                    <option value="field3">Not yet defined</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="children">
                <Form.Label>About starting a family</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={children} onChange={handleCheckedChange} name="children">
                    <option value="field1">I want to have children</option>
                    <option value="field2">I do not want children</option>
                    <option value="field3">I already have children, but I want to have more</option>
                    <option value="field3">I already have children, but I do not want to have more</option>
                    <option value="field3">I am not sure yet</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="religion">
                <Form.Label>Religious belief</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={religion} onChange={handleCheckedChange} name="religion">
                    <option value="field1">Agnostic</option>
                    <option value="field2">Religious</option>
                    <option value="field3">Spiritual</option>
                    <option value="field3">Atheist</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="political">
                <Form.Label>Political ideology</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={political} onChange={handleCheckedChange} name="political">
                    <option value="field1">Apolitical</option>
                    <option value="field2">Moderate</option>
                    <option value="field3">Liberal</option>
                    <option value="field3">Conservative</option>
                </Form.Control>
            </Form.Group>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading image...' : 'Create Profile'}</Button>
        </Form >
    )
}

export default ProfileForm