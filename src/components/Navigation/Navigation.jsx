import { Navbar, Container, Nav, NavDropdown, Figure, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext, useState } from 'react'
import Loginform from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import ModalWindow from "../../components/ModalWindow/ModalWindow"
import './Navigation.css'

const Navigation = () => {

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })
    const changeModalContent = content => setModalInfo({ ...modalInfo, content })

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <Navbar className="navbar" expand="lg" >
            <Container>
                <Row>
                    <NavLink to="/">
                        <Navbar.Brand as="span"><img className="logo" src='/winklogo.png' ></img></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/feed" className="nav-link">Feed</NavLink>
                            <NavLink to="/experiences" className="nav-link">Experiences</NavLink>
                            <NavLink to="/profile" className="nav-link">Profile</NavLink>
                        </Nav>

                        {
                            isLoggedIn
                                ?
                                user && <NavLink to="/profile" className="nav-link justify-content-end">Hello! {user.name}
                                    <Figure>
                                        <Figure.Image className='miniavatar'
                                            width={50}
                                            height={50}
                                            alt="user picture"
                                            src={user.profileImg}
                                        />
                                    </Figure>
                                    <NavDropdown title="" id="basic-nav-dropdown">
                                        <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item to="#action/3.2">Settings</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logOutUser}>Log out</NavDropdown.Item>
                                    </NavDropdown>
                                </NavLink>
                                :
                                <>
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
                                    <Button className="createAccountButton" onClick={openModal}>Sign up</Button>
                                </>
                        }
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Navigation
