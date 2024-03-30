
import React from 'react';
import { Container } from 'react-bootstrap';
import GraphRepresentation from './graphrepresentation';
const Dashboard = () => {
    return (
        <Container>
            <h1>{process.env.NAME}</h1>
            <h2>{process.env.DASHBOARD_TITLE}</h2>
            <div className="tin">
                <aside>
                    <div className="top">
                        <div className="logo"></div>
                        <div className="close" id="close-btn">
                            <span className="material-symbols-sharp"> close </span>
                        </div>
                    </div>
                    <div className="sidebar">
                        <a href="#" className="active">
                        <span class="material-symbols-outlined">bar_chart_4_bars</span>
                            <h3>Dashboard</h3>
                        </a>
                    </div>
                </aside>
                <main>
                    <h1>{process.env.DASHBOARD_TITLE}</h1>
                    <div className="connection-status">
                        <h3>Connection Status: <span className="status">Disconnected</span></h3>
                    </div>
                    <div className="insights">
                        <div className="temperature">
                            <div className="middle">
                                <div className="left">
                                    <h3>Temperature</h3>
                                    <h1 id="temperature"></h1>
                                </div>
                                <div className="icon">
                                <span class="material-symbols-outlined">device_thermostat</span>
                                </div>
                            </div>
                        </div>
                        {/* End of temperature */}
                        <div className="pressure">
                            <div className="middle">
                                <div className="left">
                                    <h3>Pressure</h3>
                                    <h1 id="pressure"></h1>
                                </div>
                                <div className="icon">
                                <span class="material-symbols-outlined">speed</span>
                                </div>
                            </div>
                        </div>
                        {/* End of pressure */}
                        {/* End of altitude */}
                    </div>
                    {/* End of Insights */}
                    <div className="histories">
                        <h2>Historical Charts</h2>
                        <div className="history-charts">
                        <GraphRepresentation />
                            <div id="temperature-history" className="history-divs"></div>
                            <div id="pressure-history" className="history-divs"></div>
                        </div>
                    </div>
                </main>
                <div className="right">
                    <div className="top">
                    </div>
                    {/* End of top */}
                    <div className="gauge-charts">
                        <h2>Gauge Charts</h2>
                        <div className="item">
                            <div id="temperature-gauge"></div>
                        </div>
                        <div className="item">
                            <div id="pressure-gauge"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;