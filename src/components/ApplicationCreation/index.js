import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Input,
  Row,
  Col,
  Divider,
  Result,
  Button,
  Modal,
} from "antd";
import {
  UserOutlined,
  FolderOpenOutlined,
  FileZipOutlined,
  RightOutlined,
} from "@ant-design/icons";

import TabSection from "./TabSection";
import RightActionSection from "./RightActionSection";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const ApplicationCreation = ({ setStepIndex, stepIndex, setRun }) => {
  const [form, setForm] = useState({});
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [modalFailedVisible, setModalFailedVisible] = useState(false);

  const submitForm = () => {
    if (form["regulatory-region"]) {
      setModalSuccessVisible(true);
    } else {
      setModalFailedVisible(true);
    }
  };

  useEffect(() => {
    if (stepIndex !== 0) {
      if (form["regulatory-region"]) {
        setRun(false);
        setStepIndex(11);
      }
    }
  }, [form]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        maxHeight: "100vh",
        overflowY: "hidden",
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          backgroundColor: "#ffe076",

          display: "flex",
          alignItems: "center",
        }}
      >
        <FolderOpenOutlined
          style={{
            fontSize: "32px",
            marginLeft: 30,
            marginRight: 30,
          }}
        />
        <h3 style={{ margin: 0 }}>NEW APPLICATION</h3>

        <div
          style={{
            backgroundColor: "#1bc11b",
            display: "flex",
            height: 25,
            marginLeft: 30,
            borderRadius: 5,
            padding: 7,
            alignItems: "center",
            color: "#fff",
          }}
        >
          <FileZipOutlined />
          <p
            style={{
              margin: 0,
              marginLeft: 7,
              lineHeight: 0.7,
              fontStyle: "italic",
            }}
          >
            Creation
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            right: 20,
            display: "flex",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ margin: 10 }} />
          <h4 style={{ margin: 0 }}>DOE John | Public</h4>
        </div>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        {/* Main Section */}
        <TabSection form={form} setForm={setForm} />

        {/* Right Side Actions */}
        <RightActionSection submit={submitForm} />
        <Modal
          footer={null}
          style={{ top: 200 }}
          visible={modalSuccessVisible}
          onOk={() => setModalSuccessVisible(false)}
          onCancel={() => setModalSuccessVisible(false)}
        >
          <Result
            status="success"
            title="Successfully Created Application!"
            subTitle="Great Job! Now you can return to the console and try a different tutorial or try to complete this one again."
            extra={[
              <Link to="/">
                <Button type="primary" key="console">
                  Go Console
                </Button>
              </Link>,
              <Link to="/">
                <Button key="try_again">Try Again</Button>
              </Link>,
            ]}
          />
        </Modal>

        <Modal
          footer={null}
          style={{ top: 200 }}
          visible={modalFailedVisible}
          onOk={() => setModalFailedVisible(false)}
          onCancel={() => setModalFailedVisible(false)}
        >
          <Result
            status="warning"
            title="It looks like there are some issues with your submission."
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => setModalFailedVisible(false)}
              >
                Review
              </Button>
            }
          />
        </Modal>
      </Content>
    </div>
  );
};

export default ApplicationCreation;
