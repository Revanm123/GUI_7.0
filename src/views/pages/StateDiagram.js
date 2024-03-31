import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StateDiagram.css';

const StateDiagram = () => {
    const states = [
        'Idle', 'SecondaryOn','Communication Entry','Levitation Precharge Done ' , 'Levitation Precharge','Thermal Entry' ,'Retract Brakes' , 
        'Levitation On','Primary Power On' , 'Propulsion On','Contactor Connection' ,'Prop Precharge Entry' ,'Cruising Entry' , 
        'DC Brakes ','Friction Brakes ' ,'Actuate Brakes' , 'Levitiation OFF', 'Retract Brakes ', 'Idle'
    ];

    const rows = [];

    for (let i = 0; i < states.length; i += 3) {
        const rowItems = states.slice(i, i + 3).map((state, index) => (
            <React.Fragment key={index}>
                <Col xs={3} className="state">{state}</Col>
                {(index < 2) && (i + index < states.length - 1) && (
                    <Col xs={1}>
                        <svg className="arrow" viewBox="0 0 50 50">
                            {Math.floor(i / 3) % 2 === 0
                                ? <><line x1="10" y1="25" x2="40" y2="25" stroke="#fff" strokeWidth="2" /><polyline points="30,15 40,25 30,35" stroke="#fff" strokeWidth="2" fill="none" /></>
                                : <><line x1="40" y1="25" x2="10" y2="25" stroke="#fff" strokeWidth="2" /><polyline points="20,15 10,25 20,35" stroke="#fff" strokeWidth="2" fill="none" /></>
                            }
                        </svg>
                    </Col>
                )}
            </React.Fragment>
        ));
        rows.push(<Row className="state-container" key={i}>{rowItems}</Row>);
    }

    return <Container>{rows}</Container>;
};

export default StateDiagram;