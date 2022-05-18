import { Spinner } from "react-bootstrap";
import './Loader.css'

const Loader = () => {
    return (
        <Spinner className='loader' animation="border" role="status">
            <span className="visually-hidden">We are finding your perfect match...</span>
        </Spinner>

    )
}
export default Loader
