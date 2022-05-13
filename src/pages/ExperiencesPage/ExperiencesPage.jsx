import { Container, Modal, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../context/auth.context'
import ExperiencesList from '../../components/ExperiencesList/ExperiencesList'
import NewExperienceForm from '../../components/NewExperienceForm/NewExperienceForm'
import experiencesService from '../../services/experiences.service'


const ExperiencesPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [experiences, setExperiences] = useState([])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => loadExperiences(), [])

    const loadExperiences = () => {
        experiencesService
            .getAllExperiences()
            .then(({ data }) => setExperiences(data))
            .then(err => console.log(err))
    }

    const { isLoggedIn } = useContext(AuthContext)

    const fireFinalActions = () => {
        closeModal()
        loadExperiences()
    }

    //Protegerla con ADMIN ROLE
    return (
        <>
            <Container>
                <h1>Experiences</h1>
                {isLoggedIn && <Button onClick={openModal}>Create new Experience</Button>}
                <hr />
                <ExperiencesList experiences={experiences} />
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewExperienceForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ExperiencesPage