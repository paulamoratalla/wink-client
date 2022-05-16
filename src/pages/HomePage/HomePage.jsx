import { Container, Button } from "react-bootstrap"
import { useState } from "react"
import Loginform from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"
import ModalWindow from "../../components/ModalWindow/ModalWindow"


const HomePage = () => {

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })
    const changeModalContent = content => setModalInfo({ ...modalInfo, content })

    return (
        <Container>

            Home Page 
            <br/>

            <Button className="big-btn" onClick={openModal}>Log In</Button>

            <ModalWindow
                modalInfo={modalInfo}
                closeModal={closeModal}
                title={modalInfo.content === 'login' ? 'Iniciar sesión' : 'Registro'}
            >
                {modalInfo.content === 'login' && <Loginform changeModalContent={changeModalContent} />}
                {modalInfo.content === 'signup' && <SignupForm changeModalContent={changeModalContent} />}
            </ModalWindow>

        </Container>
    )
}

export default HomePage