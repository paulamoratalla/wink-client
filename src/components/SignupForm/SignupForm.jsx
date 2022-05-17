import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import uploadService from "../../services/upload.service"


const SignupForm = ({ changeModalContent }) => {

    const [signupData, setSignupData] = useState({
        name: '',
        password: '',
        email: '',
        profileImg: '',
        city: '',
        birth: '',
        identity: '',
        city: '',
        interestedGender: '',
        height: 0,
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

    const navigate = useNavigate()

    const { name, email, password, birth, identity, city, interestedGender, height, exercise, zodiac, education, drink, smoke, lookingFor, children, religion, political } = signupData

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const handleImageUpload = e => {
        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }

    const handleCheckedChange = e => {
        const { name, value } = e.currentTarget
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup({ ...signupData })
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} name="name" value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="profileImg">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} name="city" value={city} />
                </Form.Group>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I am 18 years or older</label>
                </div>

                <Form.Group className="mb-3" controlId="birth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" value={birth} onChange={handleInputChange} name="birth" />
                    <Form.Text className="text-muted">You must be at least 18 years old to use Wink</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="identity">
                    <Form.Label>Identity</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={identity} onChange={handleCheckedChange} name="identity">
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Gender-fluid">Gender-fluid</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="interestedGender">
                    <Form.Label>Interested in</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={interestedGender} onChange={handleCheckedChange} name="interestedGender">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Everyone">Everyone</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="height">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" value={height} onChange={handleInputChange} name="height" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exercise">
                    <Form.Label>Exercise practice</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={exercise} onChange={handleCheckedChange} name="exercise">
                        <option value="Active">I am very active & I love sports</option>
                        <option value="Sometimes">Sometimes I exercise</option>
                        <option value="Almost never">Almost never or never</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="zodiac">
                    <Form.Label>Zodiac sign</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={zodiac} onChange={handleCheckedChange} name="zodiac">
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Saggitarius">Saggitarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="education">
                    <Form.Label>Educational level</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={education} onChange={handleCheckedChange} name="education">
                        <option value="High School">High School</option>
                        <option value="In college">In College</option>
                        <option value="Undergraduate degree">Undergraduate Degree</option>
                        <option value="Graduate degree">Graduate Degree</option>
                        <option value="Postgraduate studies">Postgraduate Studies</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="drink">
                    <Form.Label>Alcohol habit</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={drink} onChange={handleCheckedChange} name="drink">
                        <option value="Socially">I usually drink socially</option>
                        <option value="Never">I never drink alcohol</option>
                        <option value="Frequently">I enjoy drinking a beer/glass of wine most days</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="smoke">
                    <Form.Label>Tobacco habit</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={smoke} onChange={handleCheckedChange} name="smoke">
                        <option value="Socially">I only smoke socially</option>
                        <option value="Never">I hate tobacco</option>
                        <option value="Regularly">I smoke</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lookingFor">
                    <Form.Label>Looking for</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={lookingFor} onChange={handleCheckedChange} name="lookingFor">
                        <option value="Met new people">Meet new people</option>
                        <option value="Something casual">Something casual</option>
                        <option value="Love relationship">A love relationship</option>
                        <option value="Don't know yet">Not yet defined</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="children">
                    <Form.Label>About starting a family</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={children} onChange={handleCheckedChange} name="children">
                        <option value="Want someday">I want to have children</option>
                        <option value="Don't want">I do not want children</option>
                        <option value="Have and want more">I already have children, but I want to have more</option>
                        <option value="Have and don't want more">I already have children, but I do not want to have more</option>
                        <option value="Not sure yet">I am not sure yet</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="religion">
                    <Form.Label>Religious belief</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={religion} onChange={handleCheckedChange} name="religion">
                        <option value="Agnostic">Agnostic</option>
                        <option value="Religious">Religious</option>
                        <option value="Spiritual">Spiritual</option>
                        <option value="Atheist">Atheist</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="political">
                    <Form.Label>Political ideology</Form.Label>
                    <Form.Control type="checkbox" as="select" multiple value={political} onChange={handleCheckedChange} name="political">
                        <option value="Apolitical">Apolitical</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Liberal">Liberal</option>
                        <option value="Conservative">Conservative</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loading Image...' : 'Sign up'}</Button>
                <div class="text-center">
                    <p>Already have an account? <button onClick={() => changeModalContent('login')}> Log In</button></p>
                </div>
            </Form>
        </>

    )
}

export default SignupForm









