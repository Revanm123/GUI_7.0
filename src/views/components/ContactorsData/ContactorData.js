import React from "react";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './ContactorData.css';
const data = [
  { name: 'Custom Name 1', active: true },
  { name: 'Custom Name 2', active: false },
];
function ContactorData({ title, data }) {
  return (
    <Container>
      <h4 style={{ color: 'white', textAlign: 'center', marginTop: "0.6rem" }}>{title}</h4>
      <Table
        style={{ width: "90%", borderRadius: "1rem", margin: "auto" }}
        bordered
        variant="dark"
      >
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <div
                  className={`led-indicator ${item.active ? 'active' : ''}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export  {ContactorData};