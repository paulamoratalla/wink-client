import { Spinner } from "react-bootstrap";
import './Loader.css'

const Loader = () => {
    return (
        <Spinner className="loader" animation="border" role="status"> </Spinner>
    )
}

export default Loader