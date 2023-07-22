import React, { useRef, useState } from "react";
import { Button, Overlay, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Header({onClick, title}) {
  const [showSignout, setShowSignout] = useState(false);
  const target = useRef(null);
  const {userInfo} = useSelector(state => state.user);
  return (
    <div className="d-flex flex-direction-row" id="dashboard1">
      <div id="dashboardProfile">{title}</div>
      {/* signout modal */}
      <div
        id="dashboard2"
        ref={target}
        onClick={() => setShowSignout(!showSignout)}
      >
        <img
          src={userInfo?.profilepicture}
          alt="img"
          style={{
            width: 50,
            height: 50,
            marginRight: 20,
            borderRadius: 50,
          }}
        />
        {userInfo?.name}
      </div>
      <Overlay target={target.current} show={showSignout} placement="bottom">
        <Tooltip id="tooltip-bottom">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <img
              src={userInfo?.profilepicture}
              alt="img"
              style={{
                width: 80,
                height: 80,
                marginRight: 20,
                borderRadius: "100%",
                marginBottom: "1rem",
              }}
            />
            <div id="dashboard6">{userInfo?.email}</div>
            <Button variant="danger" style={{ cursor: "pointer", borderRadius: 20 }} onClick={onClick}>
              Signout
            </Button>
          </div>
        </Tooltip>
      </Overlay>
    </div>
  );
}
