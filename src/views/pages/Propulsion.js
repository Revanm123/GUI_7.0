

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Speed } from "../components/Speed/Speed";
import { Acceleration } from "../components/Acceleration/Acceleration";
import "./styles.css";
import { ThreePhase } from "../components/ThreePhase/ThreePhase";
import { VoltagePropulsion } from "../components/VoltagePropulsion/VoltagePropulsion";
import { TabulatedData } from "../components/TabulatedData/TabulatedData";
import {RollPitchYawData} from "../components/RollPitchYaw/RollPitchYawData.js";

function Propulsion(props) {
  return (
    <Container className="mx-0 px-0">
      <Row style={{marginTop: "1rem" }} className="mx-0 px-0">
        <Col lg={9} className="col">
          <h4 style={{color:'white',  textAlign: "center" }}>On-Pod Coils</h4>
          <ThreePhase data={props.ipmdata} />
        </Col>
        <Col lg={3} className="col">
          <VoltagePropulsion busbarVoltage={props.busbarVoltage} />
        </Col>
        <Col lg={9} className="col">
        <h4 style={{color:'white',  textAlign: "center" }}>On-Track Coils</h4>
          <ThreePhase data={props.ipmdata} />
        </Col>
        <Col lg={3} className="col">
          <VoltagePropulsion busbarVoltage={props.busbarVoltage} />
        </Col>
      </Row>
      <Row style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <Col lg={3} className="col">
          <Speed speed={props.speed} />
        </Col>
        <Col lg={3} className="col">
          <Acceleration acceleration={props.acceleration} />
        </Col>
        <Col lg={6} className="col">
          <RollPitchYawData
            data={[
              ["Roll", props.roll],
              ["Pitch", props.pitch],
              ["Yaw", props.yaw]
            ]}
          />
        </Col>
      </Row>
      <Row style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <Col lg={6} className="col">
          <Container>
            <Row>
              <Col>
                <TabulatedData title="Thermister Top 1" data={[props.thermister1, props.thermister2, props.thermister3]} />
              </Col>

              <Col>
                <TabulatedData title="Thermister Top 2" data={[props.thermister4, props.thermister5, props.thermister6]} />
              </Col>
            </Row>

            <Row>
              <Col>
                <TabulatedData title="Thermister Bottom 1" data={[props.thermister1, props.thermister2, props.thermister3]} />
              </Col>
              <Col>
                <TabulatedData title="Thermister Bottom 2" data={[props.thermister4, props.thermister5, props.thermister6]} />
              </Col>
            </Row>


          </Container>
          <Container>
            <Row>
              <Col>
                <TabulatedData title="Inverter Current" data={[props.inputcurrent1]} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <TabulatedData title="Track Current" data={[props.trackcurrent1]} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6} className="col">
          <Container>

          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export { Propulsion };
