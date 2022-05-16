import { useState, useContext } from "react"
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
        city: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const { name, password, email, city } = signupData

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

                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loading Image...' : 'Sign up'}</Button>
                <div class="text-center">
                    <p>Already have an account? <button onClick={() => changeModalContent('login')}> Log In</button></p>
                </div>
            </Form>
        </>

    )
}

export default SignupForm









