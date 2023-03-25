import { useState } from 'react';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const Experience = ({ exp }) => {
    const showText = "Show more +";
    const hideText = "Show less -";
    const [toggleAcc, setToggleAcc] = useState(false);
    const [toggleText, setToggleText] = useState(showText);

    const toggleAccHandler = () => {
        setToggleAcc(!toggleAcc);
        setToggleText(toggleAcc ? showText : hideText);
    }

    return ( 
        <div className="experience">
            <Row>
                <Col lg={9}>
                    <p className="experiences__title">{ exp.title }</p>
                </Col>
                <Col lg={3}>
                    <p className="experiences__date">{ exp.startDate } - { exp.endDate }</p>
                </Col>
            </Row>
            <Col>
                <div className="experiences__company-wrapper">
                    <img className="experiences__company-logo circular_img" src={ exp.imgPath } alt="Publicis Sapient Logo" />
                    <p className="experiences__company">{ exp.company }</p>
                </div>
            </Col>
            {toggleAcc &&
            <Col lg={9}>
                <ul className="accomplishments">
                    {exp.accomplishments.map((acc, i) => {
                        return <li key={i} className="accomplishment">{acc}</li>
                    })}
                </ul>
            </Col> }
            <Col>
                <button className="accomplishment__btn" onClick={toggleAccHandler}>{toggleText}</button>
            </Col> 
                        
        </div>
     );
}
 
export default Experience;