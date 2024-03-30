import React, { useEffect, useRef } from 'react';
import mqtt from 'mqtt';
import { Container, Row, Col } from 'react-bootstrap';

const MQTTService = ({ host, messageCallbacks }) => {
    const mqttClient = useRef(null);

    useEffect(() => {
        mqttClient.current = mqtt.connect(host);

        mqttClient.current.on("error", (err) => {
            console.log(err);
            mqttClient.current.end();
            if (messageCallbacks && messageCallbacks.onError)
                messageCallbacks.onError(err);
        });

        mqttClient.current.on("connect", () => {
            console.log(`MQTT client connected`);
            if (messageCallbacks && messageCallbacks.onConnect) {
                messageCallbacks.onConnect("Connected");
            }
        });

        mqttClient.current.on("message", (topic, message) => {
            if (messageCallbacks && messageCallbacks.onMessage) {
                messageCallbacks.onMessage(topic, message);
            }
        });

        mqttClient.current.on("close", () => {
            console.log(`MQTT client disconnected`);
            if (messageCallbacks && messageCallbacks.onClose)
                messageCallbacks.onClose();
        });

        return () => {
            if (mqttClient.current) {
                mqttClient.current.end();
            }
        };
    }, [host, messageCallbacks]);

    const publish = (topic, message, options) => {
        mqttClient.current.publish(topic, message);
    };

    const subscribe = (topic, options) => {
        mqttClient.current.subscribe(topic, options);
    };

    return { publish, subscribe };
};

const GraphsComm = () => {
    // Define the callback functions
    const handleMQTTError = (err) => {
        console.error(err);
    };

    const handleMQTTConnect = (message) => {
        console.log(message);
    };

    const handleMQTTMessage = (topic, message) => {
        console.log(`Received message on ${topic}: ${message}`);
    };

    const handleMQTTClose = () => {
        console.log('MQTT client disconnected');
    };

    const mqttService = MQTTService('mqtt://your-mqtt-host', {
        onError: handleMQTTError,
        onConnect: handleMQTTConnect,
        onMessage: handleMQTTMessage,
        onClose: handleMQTTClose
    });

    // Rest of your code...

    return (
        <Container>
            <Row>
                <Col>
                    {/* Your JSX */}
                </Col>
            </Row>
        </Container>
    );
};

export default GraphsComm;