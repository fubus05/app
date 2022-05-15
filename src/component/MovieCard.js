import { Card } from "react-bootstrap"

const MovieCard = ({movie}) => {
    
    return(
            <Card style={{ width: '18rem', margin: '25px'}}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}/>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.release_date}</Card.Text>
                </Card.Body>
            </Card>
    )
}

export default MovieCard