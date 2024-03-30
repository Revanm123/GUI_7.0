import React, { useState, useEffect } from "react";
import { Plotly } from "plotly.js-dist";
import MQTTService from "./graphscomm";

const GraphRepresentation = () => {
    const [chartBGColor, setChartBGColor] = useState("");
    const [chartFontColor, setChartFontColor] = useState("");
    const [chartAxisColor, setChartAxisColor] = useState("");
    const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(max-width: 600px)"));

    // Define the missing variables
    const [historyCharts, setHistoryCharts] = useState([]);
    const [temperatureHistoryDiv, setTemperatureHistoryDiv] = useState(null);
    const [newTempXArray, setNewTempXArray] = useState([]);
    const [newTempYArray, setNewTempYArray] = useState([]);
    const [pressureHistoryDiv, setPressureHistoryDiv] = useState(null);
    const [newPressureXArray, setNewPressureXArray] = useState([]);
    const [newPressureYArray, setNewPressureYArray] = useState([]);
    const [temperatureGaugeDiv, setTemperatureGaugeDiv] = useState(null);
    const [pressureGaugeDiv, setPressureGaugeDiv] = useState(null);
    const [gaugeCharts, setGaugeCharts] = useState([]);

    useEffect(() => {
        // Fetch MQTT Connection
        fetchMQTTConnection();

        // Run it initially
        handleDeviceChange(mediaQuery);

        // Cleanup function
        return () => {
            mediaQuery.removeEventListener("change", handleDeviceChange);
        };
    }, []);

    useEffect(() => {
        updateChartsBackground();
    }, [chartBGColor, chartFontColor, chartAxisColor]);

    const handleDeviceChange = (e) => {
        if (e.matches) {
            console.log("Inside Mobile");
            var updateHistory = {
                width: 323,
                height: 250,
                "xaxis.autorange": true,
                "yaxis.autorange": true,
            };
            historyCharts.forEach((chart) => Plotly.relayout(chart, updateHistory));
        } else {
            var updateHistory = {
                width: 550,
                height: 260,
                "xaxis.autorange": true,
                "yaxis.autorange": true,
            };
            historyCharts.forEach((chart) => Plotly.relayout(chart, updateHistory));
        }
    };

    const fetchMQTTConnection = () => {
        fetch("/mqttConnDetails", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                initializeMQTTConnection(data.mqttServer, data.mqttTopic);
            })
            .catch((error) => console.error("Error getting MQTT Connection:", error));
    };

    const initializeMQTTConnection = (mqttServer, mqttTopic) => {
        console.log(
            `Initializing connection to :: ${mqttServer}, topic :: ${mqttTopic}`
        );
        var fnCallbacks = { onConnect, onMessage, onError, onClose };

        var mqttService = new MQTTService(mqttServer, fnCallbacks);
        mqttService.connect();

        mqttService.subscribe(mqttTopic);
    };

    const onConnect = (message) => {
        const mqttStatus = document.getElementById("mqttStatus");
        mqttStatus.textContent = "Connected";
    };

    const onMessage = (topic, message) => {
        const mqttStatus = document.getElementById("mqttStatus");
        var stringResponse = message.toString();
        var messageResponse = JSON.parse(stringResponse);
        updateSensorReadings(messageResponse);
    };

    const onError = (error) => {
        const mqttStatus = document.getElementById("mqttStatus");
        console.log(`Error encountered :: ${error}`);
        mqttStatus.textContent = "Error";
    };

    const onClose = () => {
        const mqttStatus = document.getElementById("mqttStatus");
        console.log(`MQTT connection closed!`);
        mqttStatus.textContent = "Closed";
    };

    const updateSensorReadings = (jsonResponse) => {
        let temperature = Number(jsonResponse.temperature).toFixed(2);
        let pressure = Number(jsonResponse.pressure).toFixed(2);

        updateBoxes(temperature, pressure);
        updateGauge(temperature, pressure);
        updateCharts(temperatureHistoryDiv, newTempXArray, newTempYArray, temperature);
        updateCharts(pressureHistoryDiv, newPressureXArray, newPressureYArray, pressure);
    };

    const updateBoxes = (temperature, pressure) => {
        let temperatureDiv = document.getElementById("temperature");
        let pressureDiv = document.getElementById("pressure");

        temperatureDiv.innerHTML = temperature + " C";
        pressureDiv.innerHTML = pressure + " hPa";
    };

    const updateGauge = (temperature, pressure) => {
        var temperature_update = {
            value: temperature,
        };
        var pressure_update = {
            value: pressure,
        };
        Plotly.update(temperatureGaugeDiv, temperature_update);
        Plotly.update(pressureGaugeDiv, pressure_update);
    };

    const updateCharts = (lineChartDiv, xArray, yArray, sensorRead) => {
        const MAX_GRAPH_POINTS = 10; // Define your value for MAX_GRAPH_POINTS
        let ctr = 0; // Initialize ctr
        if (xArray.length >= MAX_GRAPH_POINTS) {
            xArray.shift();
        }
        if (yArray.length >= MAX_GRAPH_POINTS) {
            yArray.shift();
        }
        xArray.push(ctr++);
        yArray.push(sensorRead);

        var data_update = {
            x: [xArray],
            y: [yArray],
        };

        Plotly.update(lineChartDiv, data_update);
    };

    const updateChartsBackground = () => {
        // updates the background color of historical charts
        var updateHistory = {
            plot_bgcolor: chartBGColor,
            paper_bgcolor: chartBGColor,
            font: {
                color: chartFontColor,
            },
            xaxis: {
                color: chartAxisColor,
                linecolor: chartAxisColor,
            },
            yaxis: {
                color: chartAxisColor,
                linecolor: chartAxisColor,
            },
        };
        historyCharts.forEach((chart) => Plotly.relayout(chart, updateHistory));

        // updates the background color of gauge charts
        var gaugeHistory = {
            plot_bgcolor: chartBGColor,
            paper_bgcolor: chartBGColor,
            font: {
                color: chartFontColor,
            },
            xaxis: {
                color: chartAxisColor,
                linecolor: chartAxisColor,
            },
            yaxis: {
                color: chartAxisColor,
                linecolor: chartAxisColor,
            },
        };
        gaugeCharts.forEach((chart) => Plotly.relayout(chart, gaugeHistory));
    };

    return (
        <div>
        <div id="temperature-gauge" ref={div => setTemperatureGaugeDiv(div)}></div>
        <div id="humidity-gauge"></div>
        <div id="pressure-gauge" ref={div => setPressureGaugeDiv(div)}></div>
        <div id="altitude-gauge"></div>
    </div>
    );
};

export default GraphRepresentation;
