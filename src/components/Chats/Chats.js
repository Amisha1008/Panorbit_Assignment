import React, { useEffect, useRef, useState } from "react";
import "./Chats.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Overlay, Tooltip } from "react-bootstrap";

export default function Chats() {
  const [usersList, setUsersList] = useState([]);
  const [showChats, setShowChats] = useState(false);

  const target = useRef(null);

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
    <>
      <div
        className="me-4"
        id="chats1"
        ref={target}
        onClick={() => setShowChats(!showChats)}
      >
        <div className="me-5">
          <FaRegMessage style={{ marginRight: "8px" }} />
          Chats{" "}
        </div>
        {showChats ? (
          <MdOutlineKeyboardArrowDown className="ms-5" id="chats2" />
        ) : (
          <MdOutlineKeyboardArrowUp className="ms-5" id="chats2" />
        )}
      </div>
      {showChats && (
        <>
          <Overlay target={target.current} show={showChats} placement="top">
            <Tooltip id="tooltip-bottom">
              <div
                style={{
                  padding: "1rem",
                  height: '50vh',
                  overflow: 'auto'
                }}
              >
                {usersList?.map((item, i) => {
                  return (
                    <div id="chats3" key={i}>
                      <img
                        src={item?.profilepicture}
                        alt="img"
                        style={{
                          width: 25,
                          height: 25,
                          marginRight: 20,
                          borderRadius: 50,
                        }}
                      />
                      <div>{item?.name}</div>
                    </div>
                  );
                })}
              </div>
            </Tooltip>
          </Overlay>
        </>
      )}
    </>
  );
}
