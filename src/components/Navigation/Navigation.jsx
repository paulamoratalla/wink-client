import { Navbar, Container, Nav, NavDropdown, Figure } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/">Wink_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/feed" className="nav-link">Feed</NavLink>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">My profile</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logOutUser}>Log out</NavDropdown.Item>
                        </NavDropdown>
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
