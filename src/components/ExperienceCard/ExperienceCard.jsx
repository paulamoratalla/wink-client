import './ExperienceCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const ExperienceCard = ({ _id, name, imageExp, price }) => {

    return (
        <Card className="ExperienceCard m-1">
            <Link to={`/experience/${_id}`}>
                <div className="d-grid gap-2">
                    <Card.Img className='bg-image hover-zoom' variant="top" src={imageExp} alt={name} />
                </div>
            </Link>
            <Card.Body>
                <Card.Title>{name} </Card.Title>
                <h6>${price} USD</h6>
            </Card.Body>
        </Card>

        // <div class="card">
        //     <div class="card-img"></div>
        //     <div class="card-info">
        //         <img height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
        //         <p class="text-title">Card title</p>
        //         <p class="text-body">Lorem Ipsum dolor sit amet</p>
        //         <Link to={`/experience/${_id}`}>
        //             <button class="card-button">Read More</button>
        //         </Link>
        //     </div>
        // </div>
    )
}

export default ExperienceCard

