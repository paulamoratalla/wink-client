import { Container, Button } from "react-bootstrap"
import { useState } from "react"
import Loginform from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"
import ModalWindow from "../../components/ModalWindow/ModalWindow"
import Steps from '../../components/Steps/Steps'
import Fade from 'react-reveal/Fade';
import './HomePage.css'


const HomePage = () => {

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })
    const changeModalContent = content => setModalInfo({ ...modalInfo, content })

    return (
        <div>
            <div className="home">
                <div className="hero">
                    <img className="bgImg" src='/background.png'></img>
                </div>

                <Container class="container1">

                    <ModalWindow
                        modalInfo={modalInfo}
                        closeModal={closeModal}
                        title={modalInfo.content === 'login' ? 'Iniciar sesión' : 'Registro'}
                    >
                        {modalInfo.content === 'login' && <Loginform changeModalContent={changeModalContent} />}
                        {modalInfo.content === 'signup' && <SignupForm changeModalContent={changeModalContent} />}
                    </ModalWindow>

                </Container>
                <Button className="button" onClick={openModal}>Create an account</Button>

            </div>
            <Steps />
        </div >

    )
}

export default HomePage