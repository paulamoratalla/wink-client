import { Container, Button, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'


const SignupPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Sign up</h1>
                    <hr />
                    <SignupForm />

                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage