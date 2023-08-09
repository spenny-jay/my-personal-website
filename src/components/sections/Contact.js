import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState("")

    const emailHandler = (e) => setEmail(e.target.value);
    return ( 
        <section id="contact" className="section">
            <Container>
                <h4 className="header">Contact</h4>
                    <form className="contact-form" action={`mailto:spenceraj@vt.edu, ${email}`} encType="text/plain">
                        <Row className="justify-content-center align-items-center mb-5">
                            <Col md={3}>
                                <label className="label" htmlFor="subject">Subject: </label>
                            </Col>
                            <Col md={6}>
                                <input className="text__input" type="text" placeholder="Subject" required id="subject"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-center align-items-center mb-5">
                            <Col md={3}>
                                <label className="label" htmlFor="email">Email: </label>
                            </Col>
                            <Col md={6}>
                                <input 
                                    className="text__input"
                                    type="text" 
                                    placeholder="Your Email Address" 
                                    required 
                                    value={email}
                                    onChange={emailHandler}
                                    id="email"
                                />
                            </Col>
                            
                        </Row>
                        <Row className="justify-content-center align-items-start mb-5">
                            <Col md={3}>
                                <label className="label" htmlFor="message">Message:</label>
                            </Col>
                            <Col md={6}>
                                <textarea 
                                    className="textbox"
                                    placeholder="Your Message" 
                                    name="body" 
                                    id="message" 
                                    cols="30" 
                                    rows="10"
                                ></textarea>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={3}>
                                <input className="contact__btn" type="submit" value="Send email" />
                            </Col>
                        </Row>
                    </form>  
            </Container>
        </section>
     );
}
 
export default Contact;