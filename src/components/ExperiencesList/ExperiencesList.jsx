import { Row, Col } from 'react-bootstrap'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import Loader from '../Loader/Loader'

const ExperiencesList = ({ experiences }) => {

    return (
        experiences.length
            ?
            <Row>
                {
                    experiences.map(experience => {
                        return (
                            <Col className='d-flex justify-content-center' md={{ span: 4 }} key={experience._id}>
                                <ExperienceCard {...experience} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default ExperiencesList