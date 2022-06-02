import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import usersService from "../../services/users.service"
import "./GalleryWinkProfile.css"
import Loader from "../Loader/Loader"

const GalleryWinkProfile = ({ _id }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        usersService
            .getOneUser(_id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => console.log(err))
    }

    const galleryProfile = user.gallery

    console.log(galleryProfile)


    return (

        galleryProfile ?
            <>
                <Container className="galleryProfile m-5 p-2">
                    <Row className="gallery-row p-2">
                        {
                            galleryProfile.map(image => {
                                return <Col md={6}><img className="gallery-images ml-10" src={image} alt="" /></Col>
                            })
                        }
                    </Row>

                </Container >
            </>
            :
            <Loader />
    )
}

export default GalleryWinkProfile