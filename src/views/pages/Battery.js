import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import "./Battery.css";
import btpckPod1 from "../../assets/batterypacknew.svg";
import btpckPod2 from "../../assets/batterypacknew.svg";
import btpckPod3 from "../../assets/batterypacknew.svg";

function ButtonData({ num, data, display }) {
    return (
      <div 
        className={data.top ? "top box white-text" : "bottom box white-text"} 
        style={{ width: '50px', height: '50px', margin: '5px', fontSize: '14px', borderRadius: '50%' }}
      >
        <h6 style={{alignContent:"center", fontSize: '20px', color: "#779933" }}>{display === 'temperature' ? data.temp : data.voltage}</h6>
      </div>
    );
  }
  
  function Battery(props) {
    const [display, setDisplay] = useState('temperature');
    const buttons = Array(10).fill({ temp: '0°C ', voltage: '0V' });
  
    const toggleDisplay = () => {
      setDisplay(prevDisplay => prevDisplay === 'temperature' ? 'voltage' : 'temperature');
    };

  return (
    <>
<h2 style={{ color:'white', textAlign: 'center', marginTop: '12rem' }} >Layer 1</h2>
<br/>
<br/>
<div style={{ display: 'flex', justifyContent: 'center',marginTop: '-12rem' ,marginLeft: '2rem' }}>
<Button onClick={toggleDisplay} style={{ backgroundColor: 'grey',borderColor: 'grey' }}>
  {display === 'temperature' ? 'Show Voltage' : 'Show Temperature'}
</Button>
</div>
      <Container className="mx-0  px-0" style={{ marginLeft: '20rem' }}>
        <div
          style={{ 
            backgroundImage: `url(${btpckPod1})`, 
            marginTop: "0rem", 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '200vh',
            position: 'relative'
          }}
          className="bg-img small-text"
        >
          <Row style={{ position: 'absolute', top: '15%', left: '47%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {buttons.slice(0, 5).map((button, index) => (
  <Col xs={2} style={{ margin: '0 0.5rem' }}>
    <ButtonData num={index + 1} data={button} display={display} />
  </Col>
))}
          </Row>
          <Row style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {buttons.slice(0, 5).map((button, index) => (
  <Col xs={2} style={{ margin: '0 0.5rem' }}>
    <ButtonData num={index + 6} data={button} display={display} />
  </Col>
))}
          </Row>
          {[...Array(5)].map((_, rowIndex) => (
                  <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '14%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                      {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
                          <Col xs={6} style={{ margin: '0 2rem' }}>
                              <ButtonData num={index + 11 + rowIndex * 2} data={button}  display={display} />
                          </Col>
                      ))}
                  </Row>
              ))}
              {[...Array(5)].map((_, rowIndex) => (
    <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '50%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
        {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
            <Col xs={6} style={{ margin: '0 2rem' }}>
                <ButtonData num={index + 21 + rowIndex * 2} data={button} display={display} />
            </Col>
        ))}
    </Row>
))}
        </div>
      </Container>
      
      <h2 style={{ color:'white', textAlign: 'center'}} >Layer 2</h2>
      <Container className="mx-0  px-0">
        <div
          style={{ 
            backgroundImage: `url(${btpckPod2})`, 
            marginTop: "2rem", 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '200vh',
            position: 'relative'
          }}
          className="bg-img small-text"
        >
          <Row style={{ position: 'absolute', top: '15%', left: '47%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              {buttons.slice(0, 5).map((button, index) => (
                  <Col xs={2} style={{ margin: '0 0.5rem' }}>
                      <ButtonData num={index + 31} data={button} display={display}  />
                  </Col>
              ))}
          </Row>
          <Row style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {buttons.slice(5, 10).map((button, index) => (
                  <Col xs={2} style={{ margin: '0 0.5rem' }}>
                      <ButtonData num={index + 36} data={button} display={display} />
                  </Col>
              ))}
          </Row>
          {[...Array(5)].map((_, rowIndex) => (
                  <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '14%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                      {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
                          <Col xs={6} style={{ margin: '0 2rem' }}>
                              <ButtonData num={index + 41 + rowIndex * 2} data={button} display={display} />
                          </Col>
                      ))}
                  </Row>
              ))}
              {[...Array(5)].map((_, rowIndex) => (
    <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '50%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
        {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
            <Col xs={6} style={{ margin: '0 2rem' }}>
                <ButtonData num={index + 51 + rowIndex * 2} data={button} display={display} />
            </Col>
        ))}
    </Row>
))}
        </div>
      </Container>

      <h2 style={{ color:'white', textAlign: 'center' }} >Layer 3</h2>
      <Container className="mx-0  px-0">
        <div
          style={{ 
            backgroundImage: `url(${btpckPod3})`, 
            marginTop: "2rem", 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '200vh',
            position: 'relative'
          }}
          className="bg-img small-text"
        >
          <Row style={{ position: 'absolute', top: '15%', left: '47%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              {buttons.slice(0, 5).map((button, index) => (
                  <Col xs={2} style={{ margin: '0 0.5rem' }}>
                      <ButtonData num={index + 61} data={button} />
                  </Col>
              ))}
          </Row>
          <Row style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {buttons.slice(5, 10).map((button, index) => (
                  <Col xs={2} style={{ margin: '0 0.5rem' }}>
                      <ButtonData num={index + 66} data={button} display={display} />
                  </Col>
              ))}
          </Row>
          {[...Array(5)].map((_, rowIndex) => (
                  <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '14%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                      {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
                          <Col xs={6} style={{ margin: '0 2rem' }}>
                              <ButtonData num={index + 71 + rowIndex * 2} data={button} display={display}  />
                          </Col>
                      ))}
                  </Row>
              ))}
              {[...Array(5)].map((_, rowIndex) => (
    <Row style={{ position: 'absolute', top: `${41.8 + rowIndex * 6.2}%`, left: '50%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
        {buttons.slice(rowIndex * 2, rowIndex * 2 + 2).map((button, index) => (
            <Col xs={6} style={{ margin: '0 2rem' }}>
                <ButtonData num={index + 81 + rowIndex * 2} data={button} display={display} />
            </Col>
        ))}
    </Row>
))}
        </div>
      </Container>

      
    </>
  );
}
export { Battery };
