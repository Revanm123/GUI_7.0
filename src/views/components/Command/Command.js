import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
    setSelectedButton(null);
  };

  const togglePodTesting = () => setShowPodTesting(prev => !prev);
  const toggleAllCommands = () => setShowAllCommands(prev => !prev);

  return (
    <div className="white-text" style={{ marginTop: "1rem", padding: "2rem 0rem 2rem 0rem", backgroundColor: "rgba(25, 25, 25, 0.5)", boxShadow: "1px 2px 3px #22252B, inset 2px 2px 2px #35393F", textAlign: "center" }}>
      <h4 style={{ fontSize: "1.2em", marginBottom: "1em" }}>Command Station</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Button className="cmd-btn" onClick={togglePodTesting}>Testing Mode</Button>
        <Button className="cmd-btn" onClick={toggleAllCommands}>Demonstration</Button>
      </div>
      {showPodTesting && (
        <div>
        <div className="switch-container">
          <input type="checkbox" id="brake6-switch" className="switch-checkbox" checked={brake6State} onChange={toggleBrake6State} />
          <label className="switch-label" htmlFor="brake6-switch">
            <span className="switch-inner"></span>
            <span className="switch-switch"></span>
          </label>
          <label className="switch-text" htmlFor="brake6-switch">{`BRAKE 6 ${brake6State ? "ON" : "OFF"}`}</label>
          </div>
          <div>
            {[
              { topic: "/TAH/HVIL_test ", message: "1", title: "HVIL test" },
              { topic: "/TAH/Precharge_test", message: "1", title: "Precharge test" },
              { topic: "/TAH/Contactors", message: "1", title: "Contactors " },
              { topic: "/TAH/LED_strip_test ", message: "1", title: "LED strip test " },
              { topic: "/TAH/MQTT_test ", message: "1", title: "MQTT test " },
              { topic: "/TAH/modulation_index", message: "1", title: "Vary modulation index (LIM) " },
              { topic: "/TAH/Booster_cruiser_test", message: "1", title: "Booster cruiser test" },
              { topic: "/TAH/MD_check", message: "1", title: "IMD check" },
              { topic: "/TAH/sensor_input_check", message: "1", title: "All sensor input check  " },
              { topic: "/TAH/Coolant_pumps", message: "1", title: "Coolant pump and pipe leak check " },
              { topic: "/TAH/PCM_check", message: "1", title: "PCM check" },
              { topic: "/TAH/Friction_Brakes_1 ", message: "1", title: "Friction Brakes 1 " },
              { topic: "/TAH/Friction_Brakes_2", message: "1", title: "Friction Brakes 2" },
              { topic: "/TAH/Friction_Brakes_3", message: "1", title: "Friction Brakes 3" },
              { topic: "/TAH/Friction_Brakes_4", message: "1", title: "Friction Brakes 4" },
              { topic: "/TAH/Mechanical_lock_1", message: "1", title: "Mechanical lock 1" },
              { topic: "/TAH/Mechanical_lock_2", message: "1", title: "Mechanical lock 2" },
              { topic: "/TAH/EMS_1", message: "1", title: "EMS 1" },
              { topic: "/TAH/EMS_2", message: "1", title: "EMS 2" },
              { topic: "/TAH/EMS_3", message: "1", title: "EMS 3" },
              { topic: "/TAH/EMS_4", message: "1", title: "EMS 4" },
              { topic: "/TAH/LEMS_1", message: "1", title: "LEMS 1" },
              { topic: "/TAH/LEMS_2", message: "1", title: "LEMS 2" },
              { topic: "/TAH/LEMS_3", message: "1", title: "LEMS 3 " },
              { topic: "/TAH/LEMS_4", message: "1", title: "LEMS 4" },
              { topic: "/TAH/ECU_Communications", message: "1", title: "ECU Communication " },
            ].map((button, index) => (
              <div key={index} style={{ margin: "0.5rem" }}>
                <Button type="button" className={`cmd-btn ${selectedButton === button.title ? "highlight" : ""}`} onClick={() => handleButtonClick(button.topic, button.message, button.title)}>{button.title}</Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {showAllCommands && (
        <div>
          {[
            { topic: "/TAH/reset", message: "1", title: "Pod Reset" },
            { topic: "/TAH/stoppod", message: "1", title: "STOP THE POD" },
            { topic: "/TAH/Start_Data_Collection", message: "1", title: "Start Data Collection" },
            { topic: "/TAH/autopodrun", message: "1", title: "Autonomous Pod Run" },
            { topic: "/TAH/start_thermal", message: "1", title: "Enable Thermal System" },
            { topic: "/TAH/brakes_retract", message: "brakes retract", title: "RETRACT BRAKES" },
            { topic: "/TAH/friction_brakes", message: "1", title: "Friction Brakes" },
            { topic: "/TAH/dc_brake", message: "1", title: "DC Brakes" },
            { topic: "/TAH/Toggle_Primarypack", message: "1", title: "Toggle Primary Pack Contactors" },
            { topic: "/TAH/Toggle_HEMSprecharge", message: "1", title: "Toggle HEMS Pre-Charge " },
            { topic: "/TAH/Start_Lev", message: "1", title: "Levitate" },
            { topic: "/TAH/Toggle_Inverter_Pre_Charge", message: "1", title: "Toggle Inverter Pre-Charge" },
            { topic: "/TAH/Toggle_Inverter_Contactor", message: "1", title: "Toggle Inverter Contactor" },
            { topic: "/TAH/Start_Booster_Cruiser", message: "1", title: "Start Booster Cruiser" },
            { topic: "/TAH/Stop_Booster_Cruiser", message: "1", title: "Stop Booster Cruiser" },
            { topic: "/TAH/Toggle_Mechanical_Lock", message: "1", title: "Toggle Mechanical Lock" },
            { topic: "/TAH/stop_inverter", message: "1", title: "Stop Inverter" },
            { topic: "/TAH/Start_Inverter", message: "1", title: "Start Inverter" },
            { topic: "/TAH/Toggle_Discharge_HEMS_Caps", message: "1", title: "Discharge HEMS Caps" },
            { topic: "/TAH/Toggle_Discharge_Inverter_Caps", message: "1", title: "Discharge Inverter Caps" },
            { topic: "/TAH/PingRequest", message: "1", title: "Ping Request" },
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