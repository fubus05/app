import { useEffect, useState } from "react"
import { Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
const Filter = ({popular, setFiltered, activeGenre, setActiveGenre}) => {
    const [handler, setHandler] = useState('Genres');
    const dataFilter = [
        {
            title: 'Action' 
        },
        {
            title: 'Adventure'
        },
        {
            title: 'Animation'
        },
        {
            title: 'Comedy'
        },
        {
            title: 'Documentary'
        },
        {
            title: 'Fantasy'
        },
        {
            title: 'Horror'
        },
        {
            title: 'Mystery'
        },
        {
            title: 'Romance' 
        }
    ]
    const handlerTitle = (e) => {
        setHandler(e)
        switch(e){
            case 'Action':
                setActiveGenre(28)
                return
            case 'Adventure':
                setActiveGenre(12)
                return
            case 'Animation':
                setActiveGenre(16)
                return
            case 'Comedy':
                setActiveGenre(35)
                return
            case 'Documentary':
                setActiveGenre(99)
                return
            case 'Fantasy': 
                setActiveGenre(14)
                return
            case 'Horror':
                setActiveGenre(36)
                return
            case 'Mystery':
                setActiveGenre(10749)
                return
            case 'Romance':
                setActiveGenre(9648)
                return
        }

    }
    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => 
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered)
    }, [activeGenre])


    return(
        <Row>
            <Col sm>
            <DropdownButton variant="outline-dark"id='dropdown-basic-button' title={handler} onSelect={handlerTitle}>
            {
                dataFilter.map((elem, i) => 
                    <Dropdown.Item eventKey={elem.title} key={elem.title}>{elem.title}</Dropdown.Item>
                )
            }
            </DropdownButton>
            </Col>
            <Col sm>
            <DropdownButton variant="outline-dark"id='dropdown-basic-button' title='User Score'>
                    <Dropdown.Item key="1">score</Dropdown.Item>
            </DropdownButton>
            </Col>
        </Row>
    )
}


export default Filter