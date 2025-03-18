import React from "react";
import "./StatusButton.css";

const StatusButton = () => {
  return (
    <button className="status-button">
      <span className="status-dot"></span>
      Agenda próxima de fechar
    </button>
  );
};

export default StatusButton;