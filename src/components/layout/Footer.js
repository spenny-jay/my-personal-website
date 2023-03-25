import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Linkedin, Github, Link } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/esm/Col';


const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://www.linkedin.com/in/spencer-josi/?profileId=ACoAACkZ_98BNC_gIoF5rD-TR-OsiqpjZiLEvuo"
                        >
                            <Linkedin fill="white" size={32}/>
                        </a>
                        <a 
                            className="icon"
                            rel="noreferrer" 
                            target="_blank" 
                            href="https://github.com/spenny-jay?tab=repositories"
                        >
                            <Github fill="white" size={32}/>
                        </a>
                        <a 
                            className="icon" 
                            rel="noreferrer"
                            target="_blank" 
                            href="https://drive.google.com/file/d/1EId-1Jpb84NYfn3wpH4pX8jKmVNcaq-P/view?usp=sharing"
                        >
                            <Link fill="white" size={32}/>
                        </a> 
                    </Col>
                </Row>
               
                <Row className="justify-content-center">
                    <span className="footer__name">Spencer Josi, 2023</span>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;