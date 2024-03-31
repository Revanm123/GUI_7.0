import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { List, HouseDoor } from "react-bootstrap-icons";
import { Container, Col, Row } from "react-bootstrap";
import EmergencyStopButton from "./EmergencyStopButton";

function Navbar() {
  const [showmenu, setShowmenu] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [podState, setPodState] = useState('Idle');
  
  const handleEmergencyStop = () => {
    console.log('Emergency brakes actuated');
    console.log('Pod stopped!');
  };
  const sendData = (topic, message) => {
    // Implement the logic to send data to MQTT broker
    console.log(`Sending message ${message} to topic ${topic}`);
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        handleEmergencyStop();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const [date, setDate] = React.useState(new Date());
  useEffect(() => {
    // Calculate the height of the navbar and set it as body padding
    const navbarHeight = document.querySelector('.fixed-top').offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';

    // Cleanup function to remove the added padding on component unmount
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
  });
  return (
    <div>
      <Container
        fluid className="fixed-top"
        style={{
          backgroundColor: "rgba(25,25,25,0.5)",
          borderBottom: "3px solid",
          borderImage:
            "linear-gradient(to right, rgba(155,155,155,0.8), rgba(155,155,155, 0.2), transparent) 1",
        }}
      >
        <Row style={{ display: "flex", alignItems: "center" }}>
          {/* <Col lg={1}>
            <Button
              style={{
                backgroundColor: "transparent",
                padding: "0px",
                border: "none",
              }}
              onClick={toggleMenu}
            >
              <List className="menu-button" />
            </Button>
          </Col> */}
          <Col style={{ textAlign: "left" }} lg={2}>
            <img
              style={{
                width: "4.5vw",
                margin: "10px",
              }}
              src={logo}
            />

          </Col>
          <Col style={{ borderRadius:'2%' , backgroundColor: '#0cbe46', color: 'black', textAlign: 'center',padding: '1px' ,marginLeft: '25%'}} md={2}>
    <p className="glow-button"></p>
    <p className="pod-state">
      <span className={`pod-state ${podState}`}>
        {podState}
      </span>
    </p>
  </Col>
          <Col style={{ color: "white", textAlign: "right", position: 'absolute', top: '2px', right: 0 }} lg={10}>
  <p className="glow-button">Connection Status</p>
  <p className="connection-status">
    <span className={`connection-status ${'active-connection' ? 'active-connection' : ''}`}>
      <span className="connection-circle"></span>Connected
    </span>
  </p>
</Col>
          {/* <Col lg={2}>{showmenu && <div style={{ color: "white" }}>hi</div>}</Col> */}
          <EmergencyStopButton onStopClick={handleEmergencyStop} />
        </Row>
      </Container>
      {/* <Offcanvas
        style={{ backgroundColor: "rgba(25,25,25,1)", width: "20%" }}
        show={showmenu}
        onHide={toggleMenu}
      >
        <Offcanvas.Header closeButton className="btn-white">
          <Offcanvas.Title style={{ color: "white" }}>
            Avishkar GUI
            <a href="/">
              <HouseDoor
                style={{
                  marginLeft: "10px",
                  marginBottom: "7px",
                  padding: "1px",
                  color: "white",
                  fontSize: "1.5rem",
                }}
                className="home-button"
              />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: "white" }}>
          <a className="nav-link" href="/levitation">
            <div>Levitation</div>
          </a>
          <a className="nav-link" href="/battery">
            <div>Battery Packs</div>
          </a>
          <a className="nav-link" href="/braking">
            <div>Braking</div>
          </a>
          <a className="nav-link" href="/inverter">
            <div>Inverter</div>
          </a>
          <a className="nav-link" href="/propulsion">
            <div>Propulsion</div>
          </a>
          <a className="nav-link" href="/stability">
            <div>Stability</div>
          </a>
          <a className="nav-link" href="/velocity">
            <div>Velocity</div>
          </a>
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  );
}

export { Navbar };
