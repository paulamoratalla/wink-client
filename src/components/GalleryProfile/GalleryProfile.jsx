import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import usersService from "../../services/users.service"
import { Link } from 'react-router-dom'
import GalleryProfileForm from "../GalleryProfileForm/GalleryProfileForm"
import "./GalleryProfile.css"
import Loader from "../Loader/Loader"



const GalleryProfile = ({ _id }) => {

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

                <Container className="galleryProfile">
                    <Row>
                        {
                            galleryProfile.map(image => {
                                return <Col><img src={image} alt="" /></Col>
                            })
                        }
                    </Row>

                    <Link to={`/${_id}/upload-images`}>
                        <div className="d-grid gap-2">
                            <Button variant="dark">Upload images</Button>
                        </div>
                    </Link>
                </Container >

            </>
            :

            <Loader />


    )




}

export default GalleryProfile