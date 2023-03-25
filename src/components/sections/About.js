import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const vtPath = "https://media.licdn.com/dms/image/C510BAQGEnHJ3Ojm1Jg/company-logo_200_200/0/1519912733262?e=1687996800&v=beta&t=pHOw0-HVB5aMQDCPVy_HApDMH3VYl9ltFQ3a9FXkevw";
const About = () => {
    return ( 
        <section id="about" className="about">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={7}>
                        <h4 className="header">Summary</h4>
                        <p className="summary">
                            My passion lies in web development as I view it as a limitless, creative outlet!
                            I have experience working in the front-end using tools like React.js, CSS, and HTML
                            and on the back-end utilizing JavaScript, AWS, and Java.
                        </p>
                    </Col>
                    <Col className="mt-5 mt-lg-0" lg={4}>
                        <h4 className="header">Education</h4>
                        <div className="degree__wrapper">
                            <img className="about__logo circular_img" src={vtPath} alt="Virginia Tech logo"/>
                            <div className="degree__info">
                                <p className="about__degree">
                                     B.S Computer Science
                                </p>
                                <p className="about__school">
                                     Virginia Tech
                                </p>
                                <p className="degree__subtext">Dec 2022 | GPA: 3.72</p>
                            </div> 
                        </div> 
                    </Col>
                </Row>
            </Container>
            
        </section>
     );
}
 
export default About;