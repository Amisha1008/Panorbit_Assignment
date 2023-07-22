import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Overlay, Tooltip } from "react-bootstrap";

function Sidebar({ onClick }) {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const [showSignout, setShowSignout] = useState(false);
  const target = useRef(null);
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 ">
          <Container fluid id="sidebar1">
            <Navbar.Brand>
              {/* signout modal */}
              <div
                id="sidebarBrand"
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
              <Overlay
                target={target.current}
                show={showSignout}
                placement="bottom"
              >
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
                    <div style={{ cursor: "pointer" }} onClick={onClick}>
                      Signout
                    </div>
                  </div>
                </Tooltip>
              </Overlay>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ backgroundColor: "Purple" }}
            >
              <Offcanvas.Header closeButton>
                <div
                  style={{ color: "white" }}
                  id="sidebarBrand"
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
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0" style={{ minHeight: "100vh" }}>
                <Nav className="justify-content-center flex-grow-1 pe-3 flex-column">
                  <Nav.Link
                    href="#"
                    style={{
                      borderBottom: "1px solid rgb(173, 146, 146)",
                      width: "150px",
                    }}
                  >
                    <Link
                      to="/dashboard"
                      id="sidebar2"
                      style={
                        location.pathname === "/dashboard"
                          ? { color: "#fff" }
                          : { color: "rgb(153, 150, 150)" }
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Profile
                        {location.pathname === "/dashboard" && (
                          <FaCircleChevronRight id="sidebar3" />
                        )}
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{
                      borderBottom: "1px solid rgb(173, 146, 146)",
                      width: "150px",
                    }}
                  >
                    <Link
                      to="/posts"
                      id="sidebar2"
                      style={
                        location.pathname === "/posts"
                          ? { color: "#fff" }
                          : { color: "rgb(153, 150, 150)" }
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Posts
                        {location.pathname === "/posts" && (
                          <FaCircleChevronRight id="sidebar3" />
                        )}
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{
                      borderBottom: "1px solid rgb(173, 146, 146)",
                      width: "150px",
                    }}
                  >
                    <Link
                      to="/gallery"
                      id="sidebar2"
                      style={
                        location.pathname === "/gallery"
                          ? { color: "#fff" }
                          : { color: "rgb(153, 150, 150)" }
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Gallery
                        {location.pathname === "/gallery" && (
                          <FaCircleChevronRight id="sidebar3" />
                        )}
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#" style={{ width: "150px" }}>
                    <Link
                      to="/todo"
                      id="sidebar2"
                      style={
                        location.pathname === "/todo"
                          ? { color: "#fff" }
                          : { color: "rgb(153, 150, 150)" }
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        ToDo
                        {location.pathname === "/todo" && (
                          <FaCircleChevronRight id="sidebar3" />
                        )}
                      </div>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Sidebar;
