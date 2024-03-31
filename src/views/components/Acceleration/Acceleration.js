import React from "react";
import "./Acceleration.css";
import "../commonStyles.css";
import speedometer from "../../../assets/speedometer.svg";
import needle from "../../../assets/pointer.svg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Acceleration(props) {
    return (
        <Container>
            <Container className="sub-section white-text">
                <h4 style={{ textAlign: "center" }}>Acceleration</h4>
                <Row>
                    <Col className="parent" style={{ textAlign: "center" }}>
                        <Image height="100%" className="image1" src={speedometer} />
                        <Image
                        className="image2"
                        height="100%"
                        style={{ transform: `rotate(${(props.speed * 4) / 3}deg)` }}
                        src={needle}
                        />
                        <div className="overlay">
                            {!props.acceleration ? 0 : props.acceleration}
                            <span style={{ fontSize: "0.7rem", color: "white" }}> m/s²</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export { Acceleration };