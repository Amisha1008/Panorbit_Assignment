import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../Redux/UserSlice";
import Loader from "../../components/Loader";
import { Slide, toast } from "react-toastify";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  // to show toast
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
      transition: Slide,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  }, []);

  const SignoutFun = () => {
    if (window.confirm("Are you sure want to Signout ?")) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(clear());
        sToast("Signedout Successfully!");
      }, 3000);
    }
  };

  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col lg={2} xs={0} className="px-0">
            <Sidebar onClick={SignoutFun} />
          </Col>
          <Col lg={10} xs={12}>
            {loadingPage ? (
              <Loader />
            ) : (
              <>
                {" "}
                <Header title="Profile" onClick={SignoutFun} />
                <Row>
                  <Col lg={5} style={{ borderRight: "1px solid lightgray" }}>
                    <div id="dashboard2Main">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={userInfo?.profilepicture}
                          alt="img"
                          style={{
                            width: 160,
                            height: 160,
                            marginRight: 20,
                            borderRadius: "100%",
                            marginBottom: "1rem",
                          }}
                        />
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">Username </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.name}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">e-mail </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.email}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">Phone </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.phone}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">Website </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.website}
                        </div>
                      </div>
                    </div>
                    <div id="dashboard4Main">
                      <h5 id="dashboard4">Company</h5>

                      <div id="dashboard6">
                        <div id="dashboard5">name </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.company?.name}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">bs </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.company?.bs}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">catchphrase </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.company?.catchPhrase}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div id="dashboard4Main">
                      <h5 id="dashboard7">Address :</h5>

                      <div id="dashboard6">
                        <div id="dashboard5">Street </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.address?.street}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">Suite </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.address?.suite}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">City </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.address?.city}
                        </div>
                      </div>
                      <div id="dashboard6">
                        <div id="dashboard5">Zipcode </div>
                        <div id="dashboard3">
                          <span style={{ color: "gray" }}>:</span>{" "}
                          {userInfo?.address?.zipcode}
                        </div>
                      </div>
                    </div>
                    {/* ${userInfo?.address?.geo?.lat} */}
                    {/* map div start */}
                    <iframe
                      src={`https://maps.google.com/maps?q=${userInfo?.address?.geo?.lat},${userInfo?.address?.geo?.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height={380}
                      style={{ borderRadius: "10px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div style={{ flexDirection: "row", display: "flex" }}>
                      <p style={{ fontFamily: "Poppins", marginRight: "1rem" }}>
                        Lat : {userInfo?.address?.geo?.lat}
                      </p>
                      <p style={{ fontFamily: "Poppins", marginRight: "1rem" }}>
                        Lng : {userInfo?.address?.geo?.lng}
                      </p>
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
