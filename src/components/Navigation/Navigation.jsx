import { Navbar, Container, Nav, NavDropdown, Figure, Button, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext, useState } from 'react'
import Loginform from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import ModalWindow from "../../components/ModalWindow/ModalWindow"
import './Navigation.css'
import { Link } from 'react-router-dom'


const Navigation = () => {
    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'Login'
    })
    const openModal = () => setModalInfo({ ...modalInfo, show: true })
    const closeModal = () => setModalInfo({ ...modalInfo, show: false })
    const changeModalContent = content => setModalInfo({ ...modalInfo, content })
    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)
    return (
        <Navbar className="navbar" expand="lg" >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="span"><img className="logo" src='/winklogo.png' ></img></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/feed" className="nav-link text-white">Feed</NavLink>
                        <NavLink to="/experiences" className="nav-link text-white">Experiences</NavLink>
                        <NavLink to="/profile" className="nav-link text-white">Profile</NavLink>
                    </Nav>
                    {
                        isLoggedIn
                            ?
                            user && <>
                                <NavLink to="/profile" className="nav-link justify-content-end">Hello! {user.name}
                                    <Figure className='miniavatarFigure'>
                                        <Figure.Image className='miniavatar'
                                            width={50}
                                            height={50}
                                            alt="user picture"
                                            src={user.profileImg}
                                        />
                                    </Figure>
                                </NavLink>
                                <NavDropdown title="" id="basic-nav-dropdown">
                                    <NavLink to="/profile">
                                        <NavDropdown.Item >
                                            <Link to={`/profile`}>Profile</Link>
                                        </NavDropdown.Item>
                                    </NavLink>
                                    <NavDropdown.Item>
                                        <Link to={`/${user.id}/edit-profile`}>Edit profile</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOutUser}>Log out</NavDropdown.Item>
                                </NavDropdown>
                            </>
                            :
                            <>
                                <Container class="container1">
                                    <ModalWindow
                                        modalInfo={modalInfo}
                                        closeModal={closeModal}
                                        title={modalInfo.content}
                                    >
                                        {modalInfo.content === 'Login' && <Loginform changeModalContent={changeModalContent} />}
                                        {modalInfo.content === 'Signup' && <SignupForm changeModalContent={changeModalContent} />}
                                    </ModalWindow>
                                </Container>
                                <Button className="createAccountButton" onClick={openModal}>Log in</Button>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation