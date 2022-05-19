import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Couples.css'

class Couples extends React.Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <div className='peoplesnamestitle'>
                            <h4>Happy Wink endings...</h4>
                        </div>
                        <Col md={3}>
                            <div className='peoplesnames'>
                                <img className='peopleImg' src='/pic1.png'></img>
                                <h6>Mark & Wyatt</h6>
                                <p>Since 2016</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='peoplesnames'>
                                <img className='peopleImg' src='/pic3.png'></img>
                                <h6>Vanessa & Aiden</h6>
                                <p>Since 2019</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='peoplesnames'>
                                <img className='peopleImg' src='/pic2.png'></img>
                                <h6>Laura & Jules</h6>
                                <p>Since 2018</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='peoplesnames'>
                                <img className='peopleImg' src='/pic4.png'></img>
                                <h6>Mario & Nicole</h6>
                                <p>Since 2015</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Couples;