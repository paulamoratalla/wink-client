import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Collaborations.css'

class Collaborations extends React.Component {
    render() {
        return (

            <div>
                <Container>
                    <div className='collaborationstitle'>
                        <h4>Partnerships</h4>
                    </div>
                    <Row className='collabor'>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-01.png' alt=''></img>
                        </Col>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-02.png' alt=''></img>
                        </Col>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-03.png' alt=''></img>
                        </Col>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-04.png' alt=''></img>
                        </Col>

                    </Row >
                    <Row className='collabor1'>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-05.png' alt=''></img>
                        </Col >
                        <Col md={3}>

                            <img className='collaborations' src='/colabo-06.png' alt=''></img>

                        </Col>
                        <Col md={3}>

                            <img className='collaborations' src='/colabo-07.png' alt=''></img>

                        </Col>
                        <Col md={3}>
                            <img className='collaborations' src='/colabo-08.png' alt=''></img>
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}

export default Collaborations;