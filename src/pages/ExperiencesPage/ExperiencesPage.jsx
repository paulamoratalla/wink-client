import { Container, Button, Carousel } from 'react-bootstrap'
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

    const { user } = useContext(AuthContext)

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

    return (
        <>
            <Carousel className='CarouselExp' variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="./images/aereal-1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='FatherCarouselCaption'>
                        <h2 className='h2Carousel'>Meet.</h2>
                        <p className='pCarousel'>Meet, experience, enjoy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="./images/carousel-2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='FatherCarouselCaption'>
                        <h2 className='h2Carousel'>Experience.</h2>
                        <p className='pCarousel'>Meet, experience, enjoy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="./images/carousel-3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='FatherCarouselCaption'>
                        <h2 className='h2Carousel'>Enjoy.</h2>
                        <p className='pCarousel'>Meet, experience, enjoy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <h1 className='experienceslisttitle mt-5'>Our best experiences</h1>

                {
                    isLoggedIn & user?.role === 'ADMIN'
                        ?
                        <Button className='d-flex justify-content-center m-5' onClick={openModal}>Create new Experience</Button>
                        :
                        null
                }
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

