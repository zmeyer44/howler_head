import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Breadcrumb, Card, Col, Button } from "antd";

import { CompassOutlined, BarsOutlined } from "@ant-design/icons";

const TabList = ({ listItems }) => {
  return (
    <div
      className="step-3"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: 250,
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#00649E",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            margin: 5,
            color: "#fff",
          }}
        >
          All Records
        </p>
        <CompassOutlined
          style={{
            margin: 5,
            color: "#fff",
            fontSize: 18,
            marginRight: 10,
          }}
        />
      </div>
      <div style={{ overflowY: "scroll" }}>
        {listItems?.map((section) => (
          <div
            key={section.title}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 20,
              paddingTop: 15,
            }}
          >
            <h3
              style={{
                maxWidth: 150,
              }}
            >
              {section.title}
            </h3>
            <hr style={{ width: "100%" }} />
            <ul
              className="records-list"
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {section.subSections?.map((item) => (
                <li key={item.name} className={`${item.active && "active"}`}>
                  <BarsOutlined />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabList;
