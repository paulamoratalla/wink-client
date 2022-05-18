import { Navbar, Container, Nav, NavDropdown, Figure } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import './Navigation.css'

const Navigation = () => {

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
                        <NavLink to="/feed" className="nav-link">Feed</NavLink>
                        <NavLink to="/experiences" className="nav-link">Experiences</NavLink>
                        <NavLink to="/winker-card" className="nav-link">WinkerCard</NavLink>
                        <NavLink to="/profile" className="nav-link">My profile</NavLink>
                    </Nav>

                    {
                        isLoggedIn
                            ?
                            user && <NavLink to="/profile" className="nav-link justify-content-end">Hello! {user.name}
                                <Figure>
                                    <Figure.Image
                                        width={50}
                                        height={50}
                                        alt="user picture"
                                        src={user.profileImg}
                                    />
                                </Figure>
                                <NavDropdown title="" id="basic-nav-dropdown">
                                    <NavDropdown.Item to="/profile">My profile</NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOutUser}>Log out</NavDropdown.Item>
                                </NavDropdown>
                            </NavLink>
                            :
                            <>
                                <NavLink to="/signup" className="nav-link">Sign up</NavLink>
                                <NavLink to="/login" className="nav-link">Log in</NavLink>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
