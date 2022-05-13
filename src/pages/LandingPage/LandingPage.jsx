import { Container, Button, Modal } from "react-bootstrap"
import { useState } from "react"
import Loginform from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"

const LandingPage = () => {

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })

    const changeModalContent = content => setModalInfo({ ...modalInfo, content })

    return (
        <Container>
            <Button className="big-btn" onClick={openModal}>Log In</Button>
            <Modal className="my-modal" centered='true' show={modalInfo.show} onHide={closeModal} size="lg">
                <Modal.Header closeButton>
                    <h3>Hello!</h3>
                </Modal.Header>
                <Modal.Body scrollable='true'>
                    {modalInfo.content === 'login' && <Loginform changeModalContent={changeModalContent} />}
                    {modalInfo.content === 'signup' && <SignupForm />}
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default LandingPage