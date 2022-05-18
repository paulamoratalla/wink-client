import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Steps.css'

class Steps extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Fade left>
                            <Col xs={3}> <h1>1</h1></Col>
                        </Fade>
                    </Row>
                    <Row>
                        <Fade left>
                            <Col xs={9}> <h4>Create an account</h4>
                                <p>We want to know your hobbies, future plans, and what your perfect date will look like. Then we will try to find your perfect match.</p>
                            </Col>
                        </Fade>
                    </Row>
                    <Row>
                        <Fade left>
                            <Col xs={3}> <h1>2</h1></Col>
                        </Fade>
                    </Row>
                    <Row>
                        <Fade left>
                            <Col xs={9}> <h4>Meet new people</h4>
                                <p>We will match you with people who have a similar personality to yours, regardless of their sexual identity.</p>
                            </Col>
                        </Fade>
                    </Row>
                    <Row>
                        <Fade left>
                            <Col xs={3}> <h1>3</h1></Col>
                        </Fade>
                    </Row>
                </Container >


                <Container>
                    <Row>
                        <Fade left>
                            <Col xs={9}> <h4>Get a date</h4>
                                <p>Choose an experience and enjoy a date with the person that you like the most.</p>
                            </Col>
                        </Fade>
                    </Row>

                </Container >

                <Container>
                    <Row>
                        <Col> <img className='peopleImg' src='/pic1.png'></img> </Col>
                        <Col><img className='peopleImg' src='/pic3.png'></img> </Col>
                        <Col><img className='peopleImg' src='/pic2.png'></img> </Col>
                        <Col><img className='peopleImg' src='/pic4.png'></img> </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Steps;