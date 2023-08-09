import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import devBadge from '../../assets/dva.png';
import solBadge from '../../assets/saa.png';
import practBadge from '../../assets/cloudPract.png';

const Skills = () => {
    return ( 

        <section id="prof" className="section">
            <Container>
                <div className="skills__container">
                    <h3 className="header">Proficiencies</h3>
                    <Row className="justify-content-between">
                        <Col lg={5}>
                            <h6 className="skills__subheader">Skills</h6>
                            <p className="skills__list"><span className="skills__key">Programming Languages:</span> Python, Java, JavaScript, TypeScript, C, SQL</p>
                            <p className="skills__list"><span className="skills__key">Libraries/Frameworks:</span> React.js, Vue.js, Express.js, Material-UI, Bootstrap, Sass, Mockito</p>
                            <p className="skills__list"><span className="skills__key">Misc:</span> AWS, Terraform, CSS, HTML, PostgreSQL, Unix, Git, Docker, Jenkins</p>
                        </Col>
                        <Col lg={5}>
                            <h6 className="skills__subheader">Certifications</h6>
                            <img class="skills__cert" src={devBadge} alt={"AWS Developer Associate Badge"} />
                            <img class="skills__cert" src={solBadge} alt={"AWS Solutions Architect Associate Badge"} />
                            <img class="skills__cert" src={practBadge} alt={"AWS Cloud Practitioner Badge"} />
                        </Col>
                    </Row>
                </div>
                </Container> 
               
        </section>
     );
}
 
export default Skills;
