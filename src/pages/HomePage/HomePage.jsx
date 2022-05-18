import { Container, Button } from "react-bootstrap"
import { useState } from "react"
import Loginform from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"
import ModalWindow from "../../components/ModalWindow/ModalWindow"
import Steps from '../../components/Steps/Steps'
import Fade from 'react-reveal/Fade';
import ExperienceMenu from "../../components/ExperienceMenu/ExperienceMenu"
import './HomePage.css'


const HomePage = () => {

    return (
        <div>
            <div className="home">
                <div className="hero">
                    <img className="bgImg" src='/background.png'></img>
                </div>
            </div>
            <div className="stepscontainer">
                <Steps />
            </div>
            <div className="experiencemenucontainer">
                <ExperienceMenu />
            </div>
        </div >

    )
}

export default HomePage