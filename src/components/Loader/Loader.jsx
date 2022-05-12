import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">We are finding your perfect match...</span>
        </Spinner>
    )
}

export default Loader