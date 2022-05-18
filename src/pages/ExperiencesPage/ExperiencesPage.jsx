import { Container, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../context/auth.context'
import ExperiencesList from '../../components/ExperiencesList/ExperiencesList'
import NewExperienceForm from '../../components/NewExperienceForm/NewExperienceForm'
import experiencesService from '../../services/experiences.service'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import './ExperiencesPage.css'


const ExperiencesPage = () => {

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'New Experience'
    })

    const [experiences, setExperiences] = useState([])

    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })

    useEffect(() => loadExperiences(), [])

    const loadExperiences = () => {
        experiencesService
            .getAllExperiences()
            .then(({ data }) => {
                setExperiences(data)
            })
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
                <h1 className='experienceslisttitle'>Our best experiences</h1>
                {isLoggedIn && <Button onClick={openModal}>Create new Experience</Button>}

                <ExperiencesList experiences={experiences} />
            </Container>

            <ModalWindow
                modalInfo={modalInfo}
                closeModal={closeModal}
                title='New Experience'
            >
                {modalInfo.content === 'New Experience' && <NewExperienceForm fireFinalActions={fireFinalActions} />}
            </ModalWindow>

        </>
    )
}

export default ExperiencesPage

