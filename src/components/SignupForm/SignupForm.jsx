import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        password: '',
        email: '',
        profileImg: '',
        city: ''
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => {
                navigate('/signup')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { name, password, email, profileImg, city } = signupData

    return (
        // <Container>
        //     <Button className="big-btn" onClick={openLogInModal}>Log In</Button>
        //     <Modal className="my-modal" centered='true' show={showLogInModal} onHide={handleLogInModal} size="lg">
        //         <Modal.Header closeButton>
        //             <h3>Hello!</h3>
        //         </Modal.Header>
        //         <Modal.Body scrollable='true'>
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
                <Form.Control type="file" onChange={handleInputChange} name="profileImg" value={profileImg} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="city" value={city} />
            </Form.Group>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">I am 18 years or older</label>
            </div>

            <Button variant="dark" type="submit">Sign up</Button>
        </Form>

        //         </Modal.Body >
        //     </Modal >
        // </Container >

    )
}

export default SignupForm









