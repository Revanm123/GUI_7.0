import React from 'react';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";

const EmergencyStopButton = ({ onStopClick }) => {
  return (
    <Button variant="danger" onClick={onStopClick}>
      Emergency Stop
    </Button>
  );
};

export default EmergencyStopButton;