import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class Steps extends React.Component {
    render() {
        return (
            <div>
                <Container>

                    <Row>
                        <Fade left>
                            <Col>
                                <h1>1</h1>
                            </Col>
                            <Col>
                                <h4>Create an account</h4>
                                <p>We want to know your hobbies, future plans, and what your perfect date will look like. Then we will try to find your perfect match.</p>
                            </Col>
                        </Fade>
                    </Row>

                    <Fade left>
                        <h1>2</h1>
                        <h4>Meet new people</h4>
                        <p>We will match you with people who have a similar personality to yours, regardless of their sexual identity.</p>
                    </Fade>
                    <Fade left>
                        <h1>1</h1>
                        <h4>Get a date</h4>
                        <p>Choose an experience and enjoy a date with the person that you like the most.</p>
                    </Fade>
                </Container>
            </div>
        );
    }
}

export default Steps;