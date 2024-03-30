import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Command.css";

function Command(props) {
  const [brake6State, setBrake6State] = useState(false); // State to track Brake 6 button state
  const [selectedButton, setSelectedButton] = useState(null);
  const [showPodTesting, setShowPodTesting] = useState(false);
  const [showAllCommands, setShowAllCommands] = useState(false);

  const toggleBrake6State = () => {
    setBrake6State((prevState) => !prevState); // Toggle the state
    console.log(`Brake 6 state changed to ${!brake6State ? "ON" : "OFF"}`);
  };

  const sendData = (topic, message) => {
    if (props.client.connected === true) {
      props.client.subscribe(topic, function (err) {
        if (!err) {
          props.client.publish(topic, message, function () {
            console.log("Message pushed ", message);
          });
        }
      });
    }
  };

  useEffect(() => {
    if (brake6State) {
      sendData("/TAH/Brake6_on", "1");
    } else {
      sendData("/TAH/Brake6_off", "1");
    }
  }, [brake6State]);

  const handleButtonClick = (topic, message, title) => {
    console.log(`Button clicked: ${title}`);
    sendData(topic, message);
    setSelectedButton(title);
    setTimeout(() => {
      setSelectedButton(null);
    }, 500);
  };

  const togglePodTesting = () => setShowPodTesting(prev => !prev);
  const toggleAllCommands = () => setShowAllCommands(prev => !prev);

  return (
    <div className="white-text" style={{ marginTop: "1rem", padding: "2rem 0rem 2rem 0rem", backgroundColor: "rgba(25, 25, 25, 0.5)", boxShadow: "1px 2px 3px #22252B, inset 2px 2px 2px #35393F", textAlign: "center" }}>
      <h4 style={{ fontSize: "1.2em", marginBottom: "1em" }}>Command Station</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Button className="cmd-btn" onClick={togglePodTesting}>Pod Testing</Button>
        <Button className="cmd-btn" onClick={toggleAllCommands}>All Commands</Button>
      </div>
      {showPodTesting && (
        <div className="switch-container">
          <input type="checkbox" id="brake6-switch" className="switch-checkbox" checked={brake6State} onChange={toggleBrake6State} />
          <label className="switch-label" htmlFor="brake6-switch">
            <span className="switch-inner"></span>
            <span className="switch-switch"></span>
          </label>
          <label className="switch-text" htmlFor="brake6-switch">{`BRAKE 6 ${brake6State ? "ON" : "OFF"}`}</label>
        </div>
      )}
      {showAllCommands && (
        <div>
          {[
            { topic: "/TAH/reset", message: "1", title: "Pod Reset" },
            { topic: "/TAH/brakes_retract", message: "brakes retract", title: "RETRACT BRAKES" },
            { topic: "/TAH/friction_brakes", message: "1", title: "Friction Brakes" },
            { topic: "/TAH/dc_brake", message: "1", title: "DC Brakes" },
            { topic: "/TAH/stop_inverter", message: "1", title: "Stop Inverter" },
            { topic: "/TAH/Start_Inverter", message: "1", title: "Start Inverter" },
            { topic: "/TAH/Toggle_Relay", message: "1", title: "Toggle Precharge Relay" },
            { topic: "/TAH/Toggle_Midpack", message: "1", title: "Toggle Mid Pack Contactors" },
            { topic: "/TAH/Toggle_Endpack", message: "1", title: "Toggle End Pack Contactors" },
            { topic: "/TAH/toggle_direction", message: "1", title: "Bidirectional run" },
            { topic: "/TAH/toggle_discharge_enable", message: "1", title: "Toggle Discharge Enable" },
            { topic: "/TAH/toggle_charge_enable", message: "1", title: "Toggle charge Enable" },
            { topic: "/TAH/Start_Lev", message: "1", title: "Levitate" },
            { topic: "/TAH/PingRequest", message: "1", title: "Ping Request" },
            { topic: "/TAH/Start_Data_Collection", message: "1", title: "Start Data Collection" },
          ].map((button, index) => (
            <div key={index} style={{ margin: "0.5rem" }}>
              <Button type="button" className={`cmd-btn ${selectedButton === button.title ? "highlight" : ""}`} onClick={() => handleButtonClick(button.topic, button.message, button.title)}>{button.title}</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Command };