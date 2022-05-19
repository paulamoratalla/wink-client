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
                        <Col md={1}> <Fade left> <h1>1</h1>   </Fade></Col>
                        <Col md={11}>    <Fade left> <h4>Create an account</h4>
                            <p>We want to know your hobbies, future plans, and what your perfect date will look like. Then we will try to find your perfect match.</p>
                        </Fade>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1}> <Fade left> <h1>2</h1>   </Fade></Col>
                        <Col md={11}>    <Fade left> <h4>Meet new people</h4>
                            <p>We will match you with people who have a similar personality to yours, regardless of their sexual identity.</p>
                        </Fade>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1}> <Fade left> <h1>3</h1>   </Fade></Col>
                        <Col md={11}>    <Fade left> <h4>Get a date</h4>
                            <p>Choose an experience and enjoy a date with the person that you like the most.</p>
                        </Fade>
                        </Col>
                    </Row>

                </Container >

                <Container>
                    <Row>
                        <Col md={3}> <img className='peopleImg' src='/pic1.png'></img> </Col>
                        <Col md={3}><img className='peopleImg' src='/pic3.png'></img> </Col>
                        <Col md={3}><img className='peopleImg' src='/pic2.png'></img> </Col>
                        <Col md={3}><img className='peopleImg' src='/pic4.png'></img> </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Steps;