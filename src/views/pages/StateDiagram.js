import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StateDiagram.css';

const StateDiagram = () => {
    const states = [
        'Idle', 'SecondaryOn','Communication Entry', 'Thermal Entry', 'Levitation Precharge', 'Levitation Precharge Done ', 'Retract Brakes', 
        'Levitation On', 'Primary Power On', 'Prop Recharge Entry','Contactor Connection' , 'Propulsion On', 'Cruising Entry', 
        'DC Brakes ', 'Friction Brakes ', 'Retract Brakes ', 'Levitiation OFF', 'Actuate Brakes', 'Idle'
    ];

    const rows = [];
    for (let i = 0; i < states.length; i += 3) {
        const rowItems = states.slice(i, i + 3).map((state, index) => (
            <React.Fragment key={index}>
                <Col xs={3} className="state">{state}</Col>
                {(index < 3) && (i + index < states.length - 1) && (
                    <Col xs={1}>
                        <svg className="arrow" viewBox="0 0 50 50">
                            <polyline points="10,25 40,25" stroke="#fff" strokeWidth="2" fill="none" />
                            <polyline points="30,15 40,25 30,35" stroke="#fff" strokeWidth="2" fill="none" />
                        </svg>
                    </Col>
                )}
            </React.Fragment>
        ));
        rows.push(<Row className="state-container" key={i}>{rowItems}</Row>);    }

    return <Container>{rows}</Container>;
};

export default StateDiagram;