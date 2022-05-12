import { Container, Button, Row, Col } from 'react-bootstrap'
import Loginform from '../../LoginForm/LoginForm'



const LoginPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Log in</h1>
                    <hr />
                    <Loginform />

                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage