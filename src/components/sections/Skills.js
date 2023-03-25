import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills = () => {
    return ( 

        <section id="prof" className="section">
            <Container>
                <div className="skills__container">
                    <h3 className="header">Proficiencies</h3>
                    <Row className="justify-content-between">
                        <Col md={5}>
                            <h6 className="skills__subheader">Skills</h6>
                            <p className="skills__list"><span className="skills__key">Programming Languages:</span> Python, Java, JavaScript, C, SQL</p>
                            <p className="skills__list"><span className="skills__key">Libraries/Frameworks:</span> React.js, Vue.js, Express.js, Material-UI, Bootstrap</p>
                            <p className="skills__list"><span className="skills__key">Misc:</span> AWS, Azure, CSS, HTML, PostgreSQL, Unix, Git, Jenkins</p>
                        </Col>
                        <Col md={5}>
                            <h6 className="skills__subheader">Certifications</h6>
                            <p className="skills__cert">AWS Cloud Practitioner - Feb 2023</p>
                            <p className="skills__cert">Azure Cloud Fundamentals - Feb 2023</p>
                        </Col>
                    </Row>
                </div>
                </Container> 
               
        </section>
     );
}
 
export default Skills;
