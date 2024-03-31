import React from "react";
import { Table, Container } from "react-bootstrap";

function ThermocoupleData({ data }) {
  return (
    <Container className="white-text">
      <h4 style={{ marginTop: "0.6rem" }}>Thermocouple</h4>
      <Table
        style={{ width: "90%", borderRadius: "1rem", margin: "auto" }}
        bordered
        variant="dark"
      >
        <tbody>
          {data.map(([label, value], index) => (
            <tr key={index}>
              <td>{label}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export {ThermocoupleData};