import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import "./Battery1.css";
import btpckPod1 from "../../assets/secondarybatterypack.svg";
import btpckPod2 from "../../assets/secondarybatterypack.svg";
import btpckPod3 from "../../assets/secondarybatterypack.svg";
import { Table } from 'react-bootstrap';

function Battery1(props) {
  return (
    <>
      <Container className="mx-0 px-0" style={{ position: 'relative' }}>
      <div
  style={{ 
    position: 'relative',
    backgroundImage: `url(${btpckPod1})`, 
    marginTop: "3rem", 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '125vh'
  }}
  className="bg-img small-text"
>
        <Table striped bordered style={{ position: 'absolute', top: '50%', left: '48%', transform: 'translate(-50%, -50%)', width: '52%', maxHeight: '50vh', overflow: 'auto' }}>
  <tbody>
    {[...Array(10)].map((_, rowIndex) => (
      <tr key={rowIndex}>
        {[...Array(3)].map((_, colIndex) => (
          <td key={colIndex} style={{ color: 'white' }}>
            Temp {rowIndex * 3 + colIndex + 1}
          </td>
        ))}
        <td style={{ color: 'white' }}>
          Voltage {rowIndex + 1}
        </td>
      </tr>
    ))}
  </tbody>
</Table>
        </div>
      </Container>
    </>
  );
}
export { Battery1 };
