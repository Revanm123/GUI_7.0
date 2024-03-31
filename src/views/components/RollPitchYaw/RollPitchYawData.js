import React from "react";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";

function RollPitchYawData({ data }) {
  return (
    <Container className="white-text">
      <h4 style={{ marginTop: "0.6rem" }}>Roll Pitch Yaw</h4>
      <Table
        style={{ width: "90%", borderRadius: "1rem", margin: "auto" }}
        bordered
        variant="dark"
      >
        <tbody>
          {data.map(([label, value]) => (
            <tr>
              <td>{label}</td>
              <td>{value} °</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export { RollPitchYawData };