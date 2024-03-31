import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { TabulatedData } from "../components/TabulatedData/TabulatedData";
import ConnectElements from 'react-connect-elements';
import './Thermal.css';
import { ThermocoupleData } from "../components/ThermocoupleData/thermocouple";

function Thermal(props) {
  const mainData = [
    props.thermister1,
    props.thermister2,
    props.thermister3,
    props.thermister4,
    props.thermister5,
    props.thermister6,
    props.thermister7,
    props.thermister8,
    props.thermister9,
    props.thermister10,
  ];

  const subsectionData = [
    [props.pressure1, props.pressure2, props.pressure3],
    [props.pressure4, props.pressure5, props.pressure6],
    [props.pressure7, props.pressure8, props.pressure9],
    [props.pressure10, props.pressure11, props.pressure12],
    [props.pressure13, props.pressure14, props.pressure15],
  ];

  return (
    <Container className="mx-0 px-0">
      <Row style={{ marginTop: "3rem" }} className="mx-0 px-0 justify-content-center">
        <Col lg={6} className="col">
          <Container className="elements">
            <Row>
              <Col>
                <div className="element main-table">
                                <Table bordered variant="dark">
                  <caption style={{color:'white',captionSide: 'top'}}>Thermistors</caption>
                  <tbody>
                    {mainData.map((item, index) => (
                      <tr key={index}>
                        <td>{` Sensor ${index + 1}`}</td>
                        <td>{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row className="line-container d-flex flex-nowrap">
  {subsectionData.map((data, index) => (
    <Col xs={2} key={index} className="element subsection">
    <ThermocoupleData
  data={[
    ['Thermocouple 1', props.thermocouple1],
    ['Thermocouple 2', props.thermocouple2],
    ['Pressure', props.pressure],
  ]}
/>
    </Col>
  ))}
</Row>
<ConnectElements
  selector=".elements"
  elements={[
    {
      from: ".line-container",
      to: ".main-table"
    }
  ]}
/>


          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export {Thermal};