import { Modal } from "react-bootstrap"
import './ModalWindow.css'

const ModalWindow = ({ title, modalInfo, closeModal, children }) => {

    return (
        <Modal className="my-modal" centered='true' show={modalInfo.show} onHide={closeModal} size="lg">
            <Modal.Header closeButton>
                <h3>{title}</h3>
            </Modal.Header>
            <Modal.Body scrollable='true' closeModal={closeModal}>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default ModalWindow