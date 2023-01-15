import { Container, Row, Tab, Tabs } from "react-bootstrap";
import dragonImage from '../assets/392397.jpg'

const Home = () => {
    return(
            <Container className="py-5">
                <Row>
                    <h1>This is the home page</h1>
                    <h4>Here you can find all the data from the game 'Elden Ring' from 'fromSoftware' here</h4>
                    <h6>This is made in <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">react</a> and <a href='https://react-bootstrap.github.io/' target="_blank" rel="noopener noreferrer">react bootstrap</a> 
                    with the <a href='https://tanstack.com/query/latest' target="_blank" rel="noopener noreferrer">tanstack query</a> library and <a href='https://axios-http.com/docs/intro' target="_blank" rel="noopener noreferrer">axios</a> for fetching the 
                    <a href="https://docs.eldenring.fanapis.com/" target="_blank" rel="noopener noreferrer">Elden ring</a> data.</h6>

                    <img src={dragonImage} className='mt-5' />
                </Row>

            </Container>
    )
}
export default Home;