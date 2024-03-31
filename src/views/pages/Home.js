import React, { useEffect } from "react";
import { BMS } from "../components/BMS/BMS";
import { Speed } from "../components/Speed/Speed";
import { Levitation } from "../components/Levitation/Levitation";
import { Position } from "../components/Position/Position";
import { ThermometerComp } from "../components/Thermometer/Thermometer";
import { BatteryTable1} from "../components/BatteryTable/BatteryTable1";
import { BatteryTable2} from "../components/BatteryTable/BatteryTable2";
import { TabulatedData } from "../components/TabulatedData/TabulatedData";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";
import { InverterData } from "../components/InverterTable/InverterData";
import {ContactorData} from "../components/ContactorsData/ContactorData";
import EmergencyStopButton from "../components/Navbar/EmergencyStopButton";
const data = [
  { name: 'HVBP MAINS +', active: true },
  { name: 'HVBP MAINS -', active: false },
  { name: 'LVBP MAINS +', active: false },
  { name: 'LVBP MAINS -', active: false },
  { name: 'Inverter Contactor', active: false },
  { name: 'Inverter Precharge', active: false },
];
function Home(props) {
  return (
    <Container className="mx-0 px-0">
      <Row style={{ marginTop: "1rem" }} className="mx-0 px-0">
        <Col lg={5} className="col">
          <Position position={props.position} />
        </Col>
        <Col lg={3} className="col">
          <Speed speed={props.speed} />
        </Col>
        <Col lg={4} className="col">
          <Levitation height={props.height} />
        </Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }} className="mx-0 px-0">
        <Col style={{ marginTop: "0.5rem" }} lg={5} className="col">
          <ThermometerComp temp1={props.emsTemp} temp2={props.limTemp} />
        </Col>
        <Col lg={4} className="col">
        <h4 style={{ color: 'white', textAlign: 'center' }}>Primary Battery Pack</h4>
          <BatteryTable1
            packvoltage={props.packvoltage}
            packcurrent={props.packcurrent}
            maxpacktemp={props.maxpacktemp}
            minpacktemp={props.minpacktemp}
            maxcellvoltage={props.maxcellvoltage}
            mincellvoltage={props.mincellvoltage}
            soc={props.soc}
            soh={props.soh}
            insulation_resistance={props.insulationresistance}
            insulation_resistance1={props.insulationresistance}
            title="Battery Pack"
          />
          
        </Col>
        <Col className="sub-section no-padding" lg={3}>
          <Row>
          <ContactorData title="Contactor Data"  data={data} />
          </Row>
        </Col>
        <Col lg={4} className="col">
        <h4 style={{ color: 'white', textAlign: 'center' }}>Low Voltage Battery Pack</h4>
          <BatteryTable2
            packvoltage={props.secondaryPackvoltage}
            packcurrent={props.secondaryPackcurrent}
            maxpacktemp={props.secondaryMaxpacktemp}
            minpacktemp={props.secondaryMinpacktemp}
            maxcellvoltage={props.secondaryMaxcellvoltage}
            mincellvoltage={props.secondaryMincellvoltage}
            soc={props.secondarySoc}
            soh={props.secondarySoh}
            title="Secondary Battery Pack"
          />
        </Col>

        <Col className="sub-section no-padding mx-4" lg={3}>
        <Row>
            <TabulatedData
              title="Pressure Sensors"
              data={[
                props.pressure1ure1,
                props.pressure2ure2,
                props.pressure3ure3,
                props.pressure4ure4,
                props.pressure5ure5,
                props.pressure6
              ]}
            />
          </Row>
        </Col>

          <Col className="sub-section no-padding mx-4" lg={3}>
          <Row>
            <TabulatedData
              title="IR Sensors"
              data={[props.reed1, props.reed2, props.reed3, props.reed4,props.reed5,
              props.reed6,props.reed7,props.reed8]}
            />
          </Row>
          </Col>
          <Col className="sub-section no-padding mx-4" lg={3}>
          <Row>
                  
                      <InverterData
              data={[
                ["Bus Bar Voltage", props.busbarVoltage ? props.busbarVoltage : 0 + " V"],
                ["Frequency", props.sinefreq ? props.sinefreq : 0 + " Hz"],
                ["Modulation Index", props.modindex ? props.modindex : 0]
              ]}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Home };