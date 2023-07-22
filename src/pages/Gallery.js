import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Slide, toast } from "react-toastify";
import { clear } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

export default function Gallery() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
            <Sidebar />
          </Col>
          <Col lg={10} xs={12}>
            <Header title="Gallery" onClick={SignoutFun} />
            <h1
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '4rem',
                color: 'lightgray',
                textAlign: 'center'
              }}
            >
              Coming Soon
            </h1>
          </Col>
        </Row>
      )}
    </Container>
  );
}
