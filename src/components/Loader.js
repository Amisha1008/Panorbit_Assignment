import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner animation="border" variant="info" size="lg" />
    </div>
  );
}
