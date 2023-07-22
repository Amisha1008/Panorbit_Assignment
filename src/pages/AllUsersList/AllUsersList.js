import React, { useEffect, useState } from "react";
import "./AllUsersList.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

export default function AllUsersList() {
  const [usersList, setUsersList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    GetAllUsersListFun();
  }, []);

  const GetAllUsersListFun = async () => {
    let config = {
      method: "GET",
      url: "https://panorbit.in/api/users.json",
    };
    axios
      .request(config)
      .then((res) => {
        console.log("userslist", res);
        setUsersList(res?.data?.users);
      })
      .catch((err) => {
        console.log("err in get userslist", err);
      });
  };

  return (
    <div id="allUsersList1">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={6} className="p-0">
            <div id="allUsersList3">Select an account</div>
            <div id="allUsersList2">
              <div id="allUsersList4">
                {usersList?.map((item, i) => {
                  return (
                    <div
                      id="allUsersList5"
                      key={i}
                      onClick={() => {
                        dispatch(setUserInfo(item));
                        navigate("/dashboard");
                      }}
                    >
                      <img
                        src={item?.profilepicture}
                        alt="img"
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 20,
                          borderRadius: 50,
                        }}
                      />
                      <div>{item?.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
